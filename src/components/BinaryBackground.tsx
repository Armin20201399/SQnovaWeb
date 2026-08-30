import React, { memo, useEffect, useRef } from 'react';

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
  const animationFrameRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef(0);
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stateRef = useRef({
    width: 0,
    height: 0,
    dpr: 0,
    columns: 0,
    drops: [] as number[],
    columnX: [] as number[],
    columnStyles: [] as string[],
    isVisible: true,
    profile: getPerformanceProfile(),
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      alpha: false,
      desynchronized: true,
    });

    if (!ctx) return;

    ctxRef.current = ctx;

    const setupCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const profile = getPerformanceProfile();
      const { dpr } = profile;

      const state = stateRef.current;

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.fillStyle = BACKGROUND_COLOR;
      ctx.fillRect(0, 0, width, height);

      const nextColumns = Math.ceil(width / FONT_SIZE);

      const nextX = new Array(nextColumns);
      const nextStyles = new Array(nextColumns);

      for (let i = 0; i < nextColumns; i++) {
        nextX[i] = i * FONT_SIZE;
        const colorBase = COLORS[i % COLORS.length];
        const alpha = 0.16 + ((i * 7) % 28) / 100;
        nextStyles[i] = `${colorBase}${alpha})`;
      }

      state.columnX = nextX;
      state.columnStyles = nextStyles;

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
    };

    ctx.font = BASE_FONT;
    ctx.textBaseline = 'alphabetic';

    setupCanvas();

    const draw = () => {
      const { width, height, columns, drops, columnX, columnStyles, profile } = stateRef.current;

      if (!width || !height || !columns || !drops.length) return;

      ctx.fillStyle = TRAIL_COLOR;
      ctx.fillRect(0, 0, width, height);

      ctx.shadowBlur = 0;

      const now = performance.now();
      const charPhase = Math.floor(now / 180);
      const highlightPhase = Math.floor(now / 500);
      const resetPhase = Math.floor(now / 1000);

      const isLowEnd = profile.isLowEnd;

      for (let i = 0; i < columns; i++) {
        const char = CHARS[(i + charPhase) & 1];
        const x = columnX[i];
        const y = drops[i] * FONT_SIZE;

        const isHighlight = ((i * 17 + highlightPhase) % 101) === 0;

        if (isHighlight) {
          ctx.fillStyle = '#fff';
          ctx.shadowBlur = isLowEnd ? 5 : 8;
          ctx.shadowColor = '#fff';
        } else {
          ctx.fillStyle = columnStyles[i];
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);

        if (y > height && ((i * 13 + resetPhase) % 100) > 96) {
          drops[i] = 0;
        }

        drops[i] += 1;
      }

      ctx.shadowBlur = 0;
    };

    const animate = (time: number) => {
      if (!stateRef.current.isVisible) return;

      const { frameInterval } = stateRef.current.profile;

      if (time - lastFrameTimeRef.current >= frameInterval) {
        lastFrameTimeRef.current = time;
        draw();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (animationFrameRef.current !== null) return;
      lastFrameTimeRef.current = performance.now();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    startAnimation();

    const handleResize = () => {
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }

      resizeTimerRef.current = setTimeout(() => {
        setupCanvas();
      }, 200);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stateRef.current.isVisible = false;
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
      } else {
        stateRef.current.isVisible = true;
        // خط زیر حذف شد تا رد پاها پاک نشوند
        // setupCanvas(false); 
        startAnimation();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
        resizeTimerRef.current = null;
      }

      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

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