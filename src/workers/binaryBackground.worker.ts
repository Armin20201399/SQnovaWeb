const FONT_SIZE = 14;
const HIGH_END_FRAME_INTERVAL = 1000 / 24;
const LOW_END_FRAME_INTERVAL = 1000 / 20;
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

let canvas: OffscreenCanvas | null = null;
let ctx: OffscreenCanvasRenderingContext2D | null = null;
let width = 0;
let height = 0;
let dpr = 1;
let columns = 0;
let drops: number[] = [];
let columnX: number[] = [];
let columnStyles: string[] = [];
let isVisible = true;
let isLowEnd = false;
let rafId = 0;
let lastFrameTime = 0;

function setupGrid() {
  if (!ctx) return;
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
  columnX = nextX;
  columnStyles = nextStyles;

  const previousDrops = drops;
  const nextDrops = new Array(nextColumns);
  for (let i = 0; i < nextColumns; i++) {
    nextDrops[i] =
      i < previousDrops.length
        ? previousDrops[i]
        : Math.random() * Math.max(1, height / FONT_SIZE);
  }
  drops = nextDrops;
  columns = nextColumns;
}

function draw() {
  if (!ctx || !width || !height || !columns) return;

  ctx.fillStyle = TRAIL_COLOR;
  ctx.fillRect(0, 0, width, height);
  ctx.shadowBlur = 0;

  const now = performance.now();
  const charPhase = Math.floor(now / 180);
  const highlightPhase = Math.floor(now / 500);
  const resetPhase = Math.floor(now / 1000);

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
}

function loop(time: number) {
  rafId = requestAnimationFrame(loop);
  if (!isVisible) return;
  const frameInterval = isLowEnd ? LOW_END_FRAME_INTERVAL : HIGH_END_FRAME_INTERVAL;
  if (time - lastFrameTime < frameInterval) return;
  lastFrameTime = time;
  draw();
}

self.onmessage = (e: MessageEvent) => {
  const msg = e.data;

  if (msg.type === 'init') {
    canvas = msg.canvas as OffscreenCanvas;
    ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (ctx) {
      ctx.font = BASE_FONT;
      ctx.textBaseline = 'alphabetic';
    }
    width = msg.width;
    height = msg.height;
    dpr = msg.dpr;
    isLowEnd = msg.isLowEnd;
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    setupGrid();
    lastFrameTime = performance.now();
    rafId = requestAnimationFrame(loop);
  }

  if (msg.type === 'resize') {
    if (!canvas) return;
    width = msg.width;
    height = msg.height;
    dpr = msg.dpr;
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    setupGrid();
  }

  if (msg.type === 'visibility') {
    isVisible = msg.isVisible;
  }

  if (msg.type === 'destroy') {
    cancelAnimationFrame(rafId);
    self.close();
  }
};