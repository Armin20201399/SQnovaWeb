import React, { useEffect, useRef, memo } from 'react';

const BinaryBackgroundComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number;
    let height: number;
    let columns: number;
    let drops: number[];
    let lastTime = 0;
    const fps = 24;
    const interval = 1000 / fps;

    const fontSize = 14;
    const chars = ['0', '1'];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(1);
    };

    window.addEventListener('resize', resize);
    resize();

    const colors = [
      'rgba(56, 189, 248, ',
      'rgba(52, 211, 153, ',
      'rgba(251, 113, 133, ',
      'rgba(168, 85, 247, ',
      'rgba(251, 191, 36, ',
    ];

    const draw = (currentTime: number) => {
      if (!isVisibleRef.current) {
        animationFrameIdRef.current = requestAnimationFrame(draw);
        return;
      }

      if (currentTime - lastTime < interval) {
        animationFrameIdRef.current = requestAnimationFrame(draw);
        return;
      }
      lastTime = currentTime;

      ctx.fillStyle = 'rgba(2, 6, 23, 0.1)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const colorBase = colors[Math.floor(Math.random() * colors.length)];
        const alpha = Math.random() * 0.3 + 0.1;

        if (Math.random() > 0.98) {
          ctx.fillStyle = '#fff';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#fff';
        } else {
          ctx.fillStyle = colorBase + alpha + ')';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      for (let j = 0; j < 5; j++) {
        const rx = Math.random() * width;
        const ry = Math.random() * height;
        const rt = chars[Math.floor(Math.random() * chars.length)];
        const rc = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = rc + (Math.random() * 0.2) + ')';
        ctx.fillText(rt, rx, ry);
      }

      animationFrameIdRef.current = requestAnimationFrame(draw);
    };

    animationFrameIdRef.current = requestAnimationFrame(draw);

    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-50 pointer-events-none opacity-25"
      style={{ background: '#020617' }}
    />
  );
};

const BinaryBackground = memo(BinaryBackgroundComponent);
export default BinaryBackground;