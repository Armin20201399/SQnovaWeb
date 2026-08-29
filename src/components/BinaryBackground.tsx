import React, { memo, useEffect, useRef } from 'react';

const FONT_SIZE = 14;
const FRAME_INTERVAL = 1000 / 24; // 24 FPS
const MAX_DEVICE_PIXEL_RATIO = 1.5;
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

const BinaryBackgroundComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const stateRef = useRef({
    width: 0,
    height: 0,
    columns: 0,
    drops: [] as number[],
    isVisible: true,
  });

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = ctxRef.current;
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO);

    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, width, height);

    const state = stateRef.current;
    state.width = width;
    state.height = height;
    state.columns = Math.ceil(width / FONT_SIZE);
    state.drops = new Array(state.columns).fill(1);
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = ctxRef.current;
    if (!ctx) return;

    const { width, height, columns, drops } = stateRef.current;
    if (!width || !height || !columns || !drops.length) return;

    ctx.fillStyle = TRAIL_COLOR;
    ctx.fillRect(0, 0, width, height);
    ctx.font = BASE_FONT;
    ctx.textBaseline = 'alphabetic';

    for (let i = 0; i < columns; i++) {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];
      const colorBase = COLORS[Math.floor(Math.random() * COLORS.length)];
      const alpha = Math.random() * 0.25 + 0.12;
      const isHighlight = Math.random() > 0.98;

      if (isHighlight) {
        ctx.fillStyle = '#fff';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#fff';
      } else {
        ctx.fillStyle = `${colorBase}${alpha})`;
        ctx.shadowBlur = 0;
      }

      const x = i * FONT_SIZE;
      const y = drops[i] * FONT_SIZE;
      ctx.fillText(char, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += 1;
    }

    ctx.shadowBlur = 0;
    for (let i = 0; i < 5; i++) {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];
      const colorBase = COLORS[Math.floor(Math.random() * COLORS.length)];
      ctx.fillStyle = `${colorBase}${Math.random() * 0.2})`;
      ctx.fillText(char, Math.random() * width, Math.random() * height);
    }
  };

  const tick = () => {
    if (stateRef.current.isVisible) {
      draw();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) return;
    ctxRef.current = ctx;

    setupCanvas();

    intervalRef.current = setInterval(tick, FRAME_INTERVAL);

    const handleResize = () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        setupCanvas();
        resizeTimerRef.current = null;
      }, 200);
    };

    const handleVisibilityChange = () => {
      stateRef.current.isVisible = !document.hidden;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

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
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // فقط یکبار اجرا می‌شود

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[1] pointer-events-none"
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
      aria-hidden="true"
    />
  );
};

const BinaryBackground = memo(BinaryBackgroundComponent);
BinaryBackground.displayName = 'BinaryBackground';

export default BinaryBackground;