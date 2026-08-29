import React, { memo, useEffect, useRef, useCallback } from 'react';

const FONT_SIZE = 14;
const HIGH_END_FRAME_INTERVAL = 1000 / 24;
const LOW_END_FRAME_INTERVAL = 1000 / 20;
const HIGH_END_DPR = 1.5;
const LOW_END_DPR = 1.25;

const CHARS = ['0', '1'] as const;

const COLORS = [
  'rgba(56, 189, 248, ',
  'rgba(52, 211, 153, ',
  'rgba(251, 113, 133, ',
  'rgba(168, 85, 247, ',
  'rgba(251, 191, 36, ',
] as const;

const BACKGROUND_COLOR = '#020617';
const TRAIL_COLOR = 'rgba(2, 6, 23, 0.1)';
const BASE_FONT = `${FONT_SIZE}px monospace`;

const getPerformanceProfile = () => {
  const hardwareConcurrency = navigator.hardwareConcurrency ?? 8;

  const deviceMemory =
    'deviceMemory' in navigator
      ? Number(
          (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8
        )
      : 8;

  const saveData =
    'connection' in navigator
      ? Boolean(
          (
            navigator as Navigator & {
              connection?: { saveData?: boolean };
            }
          ).connection?.saveData
        )
      : false;

  const isLowEnd =
    hardwareConcurrency <= 4 ||
    deviceMemory <= 4 ||
    saveData;

  return {
    isLowEnd,
    dpr: isLowEnd ? LOW_END_DPR : HIGH_END_DPR,
    frameInterval: isLowEnd
      ? LOW_END_FRAME_INTERVAL
      : HIGH_END_FRAME_INTERVAL,
  };
};

const BinaryBackgroundComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stateRef = useRef({
    width: 0,
    height: 0,
    dpr: 0,
    columns: 0,
    drops: [] as number[],
    isVisible: true,
    profile: getPerformanceProfile(),
  });

  const setupCanvas = useCallback((forceRedraw = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = ctxRef.current;
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const profile = getPerformanceProfile();
    const { dpr } = profile;

    const state = stateRef.current;

    const previousWidth = state.width;
    const previousHeight = state.height;
    const previousDpr = state.dpr;

    const sizeChanged =
      previousWidth !== width ||
      previousHeight !== height ||
      previousDpr !== dpr;

    if (!sizeChanged && !forceRedraw) {
      state.profile = profile;
      return;
    }

    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Only repaint the full background when the canvas was created/resized
    // or an explicit redraw was requested.
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, width, height);

    const nextColumns = Math.ceil(width / FONT_SIZE);

    if (state.columns !== nextColumns) {
      const previousDrops = state.drops;
      const nextDrops = new Array(nextColumns);

      for (let i = 0; i < nextColumns; i++) {
        if (i < previousDrops.length) {
          nextDrops[i] = previousDrops[i];
        } else {
          nextDrops[i] = Math.random() * Math.max(1, height / FONT_SIZE);
        }
      }

      state.drops = nextDrops;
      state.columns = nextColumns;
    } else if (state.drops.length === 0) {
      state.drops = new Array(nextColumns).fill(1);
      state.columns = nextColumns;
    }

    state.width = width;
    state.height = height;
    state.dpr = dpr;
    state.profile = profile;
  }, []);

  const handleResize = useCallback(() => {
    if (resizeTimerRef.current) {
      clearTimeout(resizeTimerRef.current);
    }

    resizeTimerRef.current = setTimeout(() => {
      setupCanvas();
    }, 200);
  }, [setupCanvas]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      alpha: false,
      desynchronized: true,
    });

    if (!ctx) return;

    ctxRef.current = ctx;

    // Initial setup only: creates the canvas and initial background.
    setupCanvas();

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = ctxRef.current;
      if (!ctx) return;

      const { width, height, columns, drops, profile } = stateRef.current;

      if (!width || !height || !columns || !drops.length) return;

      ctx.fillStyle = TRAIL_COLOR;
      ctx.fillRect(0, 0, width, height);

      ctx.font = BASE_FONT;
      ctx.textBaseline = 'alphabetic';
      ctx.shadowBlur = 0;

      const now = performance.now();
      const charPhase = Math.floor(now / 180);
      const highlightPhase = Math.floor(now / 500);
      const resetPhase = Math.floor(now / 1000);

      for (let i = 0; i < columns; i++) {
        const char = CHARS[(i + charPhase) & 1];
        const colorBase = COLORS[i % COLORS.length];

        // Slightly brighter than the original while keeping the same palette.
        const alpha = 0.16 + ((i * 7) % 28) / 100;

        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        const isHighlight =
          ((i * 17 + highlightPhase) % 101) === 0;

        if (isHighlight) {
          ctx.fillStyle = '#fff';
          ctx.shadowBlur = profile.isLowEnd ? 5 : 8;
          ctx.shadowColor = '#fff';
        } else {
          ctx.fillStyle = `${colorBase}${alpha})`;
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);

        if (
          y > height &&
          ((i * 13 + resetPhase) % 100) > 96
        ) {
          drops[i] = 0;
        }

        drops[i] += 1;
      }

      ctx.shadowBlur = 0;
    };

    const tick = () => {
      if (!stateRef.current.isVisible) return;
      draw();
    };

    const startAnimation = () => {
      if (intervalRef.current) return;

      const { frameInterval } = getPerformanceProfile();

      intervalRef.current = setInterval(tick, frameInterval);
    };

    startAnimation();

    window.addEventListener('resize', handleResize, { passive: true });

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stateRef.current.isVisible = false;

        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      } else {
        stateRef.current.isVisible = true;

        // Do NOT repaint the canvas here.
        // Keeping the existing pixels avoids the Matrix "starting over"
        // visually when switching browser tabs.
        setupCanvas();

        startAnimation();
      }
    };

    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange
    );

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
        resizeTimerRef.current = null;
      }

      window.removeEventListener('resize', handleResize);
      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange
      );
    };
  }, [handleResize, setupCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    />
  );
};

export const BinaryBackground = memo(BinaryBackgroundComponent);
export default BinaryBackground;
