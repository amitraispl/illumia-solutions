interface IntegrationNetworkGraphicProps {
  /** onDark = sits on a dark card background (red center node); onLight = sits on the page's light background (dark center node) */
  variant: "onDark" | "onLight";
  satelliteCount?: number;
  className?: string;
}

const CX = 500;
const CY = 500;
const RADIUS = 300;
const SAT_W = 160;
const SAT_H = 128;
const LINE_COLOR = "#b31c33";
const SAT_FILL = "#ffffff";
const SAT_ICON_COLOR = "#7a4a4a";

// ── Center icon glyphs — App / Database / Server ──────────────────────────
function AppIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  const x0 = cx - 14;
  const y0 = cy - 11;
  return (
    <g stroke={color} strokeWidth={1.8} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x={x0} y={y0} width={28} height={22} rx={3} />
      <line x1={x0} y1={y0 + 7} x2={x0 + 28} y2={y0 + 7} />
      <circle cx={x0 + 5} cy={y0 + 3.8} r={1.2} fill={color} stroke="none" />
      <circle cx={x0 + 10} cy={y0 + 3.8} r={1.2} fill={color} stroke="none" />
    </g>
  );
}

function DbIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  const yTop = cy - 10;
  return (
    <g stroke={color} strokeWidth={1.8} fill="none" strokeLinecap="round">
      <ellipse cx={cx} cy={yTop} rx={13} ry={4.5} />
      <line x1={cx - 13} y1={yTop} x2={cx - 13} y2={yTop + 20} />
      <line x1={cx + 13} y1={yTop} x2={cx + 13} y2={yTop + 20} />
      <path d={`M ${cx - 13} ${yTop + 10} A 13 4.5 0 0 0 ${cx + 13} ${yTop + 10}`} />
      <path d={`M ${cx - 13} ${yTop + 20} A 13 4.5 0 0 0 ${cx + 13} ${yTop + 20}`} />
    </g>
  );
}

function BucketIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  const yTop = cy - 12;
  return (
    <g stroke={color} strokeWidth={1.8} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${cx - 13} ${yTop} L ${cx - 10} ${cy + 14} A 10 3 0 0 0 ${cx + 10} ${cy + 14} L ${cx + 13} ${yTop}`} />
      <ellipse cx={cx} cy={yTop} rx={13} ry={3.6} />
    </g>
  );
}

// Small arrow from the App icon towards a neighboring icon, stopping short so
// it doesn't collide with either glyph.
function CenterArrow({
  x1,
  y1,
  x2,
  y2,
  color,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len;
  const uy = dy / len;
  const startPad = 12;
  const endPad = 22;
  const sx = x1 + ux * startPad;
  const sy = y1 + uy * startPad;
  const ex = x2 - ux * endPad;
  const ey = y2 - uy * endPad;
  const ah = 4.5;
  const leftX = ex - ux * ah - uy * ah;
  const leftY = ey - uy * ah + ux * ah;
  const rightX = ex - ux * ah + uy * ah;
  const rightY = ey - uy * ah - ux * ah;
  return (
    <g stroke={color} strokeWidth={1.5} fill="none" strokeLinecap="round">
      <line x1={sx} y1={sy} x2={ex} y2={ey} />
      <path d={`M ${leftX} ${leftY} L ${ex} ${ey} L ${rightX} ${rightY}`} fill="none" />
    </g>
  );
}

// ── Generic satellite glyphs — no brand marks, interchangeable "app" icons ─
function GridIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  const s = 9;
  const g = 4;
  return (
    <g fill={color}>
      <rect x={cx - s - g / 2} y={cy - s - g / 2} width={s} height={s} rx={1.5} />
      <rect x={cx + g / 2} y={cy - s - g / 2} width={s} height={s} rx={1.5} />
      <rect x={cx - s - g / 2} y={cy + g / 2} width={s} height={s} rx={1.5} />
      <rect x={cx + g / 2} y={cy + g / 2} width={s} height={s} rx={1.5} />
    </g>
  );
}

function CloudIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g fill={color}>
      <circle cx={cx - 6} cy={cy + 2} r={6} />
      <circle cx={cx + 2} cy={cy - 3} r={8} />
      <circle cx={cx + 10} cy={cy + 2} r={5} />
      <rect x={cx - 12} y={cy + 2} width={28} height={8} rx={4} />
    </g>
  );
}

function ChatIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g>
      <rect x={cx - 12} y={cy - 9} width={24} height={16} rx={6} fill="none" stroke={color} strokeWidth={1.8} />
      <path d={`M ${cx - 4} ${cy + 7} L ${cx - 8} ${cy + 13} L ${cx + 1} ${cy + 7} Z`} fill={color} />
    </g>
  );
}

function BarsIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g fill={color}>
      <rect x={cx - 11} y={cy - 2} width={6} height={14} rx={1} />
      <rect x={cx - 3} y={cy - 10} width={6} height={22} rx={1} />
      <rect x={cx + 5} y={cy + 2} width={6} height={10} rx={1} />
    </g>
  );
}

function CardIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g>
      <rect x={cx - 13} y={cy - 9} width={26} height={18} rx={3} fill="none" stroke={color} strokeWidth={1.8} />
      <rect x={cx - 13} y={cy - 4} width={26} height={5} fill={color} />
    </g>
  );
}

function LinkIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g fill="none" stroke={color} strokeWidth={1.8}>
      <circle cx={cx - 5} cy={cy} r={7} />
      <circle cx={cx + 5} cy={cy} r={7} />
    </g>
  );
}

const SATELLITE_ICONS = [GridIcon, CloudIcon, ChatIcon, BarsIcon, CardIcon, LinkIcon];

export default function IntegrationNetworkGraphic({
  variant,
  satelliteCount = 6,
  className = "",
}: IntegrationNetworkGraphicProps) {
  const centerFill = variant === "onDark" ? "#b31c33" : "#1c1b1b";
  const points = Array.from({ length: satelliteCount }, (_, i) => {
    const angle = (-90 + (360 / satelliteCount) * i) * (Math.PI / 180);
    return {
      x: CX + RADIUS * Math.cos(angle),
      y: CY + RADIUS * Math.sin(angle),
      Icon: SATELLITE_ICONS[i % SATELLITE_ICONS.length],
    };
  });

  // The satellite ring isn't vertically symmetric for every count (e.g. 5
  // nodes has 1 on top, 2 on the bottom), so re-center the whole composition's
  // bounding box in the viewBox instead of assuming CX/CY is the visual middle.
  const xs = [CX - 70, CX + 70, ...points.flatMap((p) => [p.x - SAT_W / 2, p.x + SAT_W / 2])];
  const ys = [CY - 60, CY + 60, ...points.flatMap((p) => [p.y - SAT_H / 2, p.y + SAT_H / 2])];
  const offsetX = 500 - (Math.min(...xs) + Math.max(...xs)) / 2;
  const offsetY = 500 - (Math.min(...ys) + Math.max(...ys)) / 2;

  return (
    <svg
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      className={`w-full h-full ${className}`}
      role="img"
      aria-label="A central application connected to a network of third-party services"
    >
      <style>{`
        .inig-line {
          stroke-dasharray: 2 10;
          animation: inig-flow 0.9s linear infinite;
        }
        @keyframes inig-flow {
          to { stroke-dashoffset: -24; }
        }
        @media (prefers-reduced-motion: reduce) {
          .inig-line { animation: none; }
        }
      `}</style>
      <g transform={`translate(${offsetX} ${offsetY})`}>
        {/* Connecting lines + midpoint dots — dashes flow outward from hub to node */}
        {points.map((p, i) => (
          <g key={`line-${i}`}>
            <line
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              stroke={LINE_COLOR}
              strokeWidth={2}
              strokeLinecap="round"
              className="inig-line"
            />
            <circle cx={(CX + p.x) / 2} cy={(CY + p.y) / 2} r={5} fill={LINE_COLOR} />
          </g>
        ))}

        {/* Satellite nodes — icons enlarged so they read clearly around the hub */}
        {points.map((p, i) => (
          <g key={`sat-${i}`}>
            <rect
              x={p.x - SAT_W / 2}
              y={p.y - SAT_H / 2}
              width={SAT_W}
              height={SAT_H}
              rx={20}
              fill={SAT_FILL}
            />
            <g transform={`translate(${p.x} ${p.y}) scale(1.5) translate(${-p.x} ${-p.y})`}>
              <p.Icon cx={p.x} cy={p.y} color={SAT_ICON_COLOR} />
            </g>
          </g>
        ))}

        {/* Center node — App at the apex, Database + Bucket forming the base
            of a triangle, with small arrows from App down to each */}
        <rect x={CX - 70} y={CY - 60} width={140} height={120} rx={18} fill={centerFill} />
        <CenterArrow x1={CX} y1={CY - 32} x2={CX - 36} y2={CY + 24} color="#ffffff" />
        <CenterArrow x1={CX} y1={CY - 32} x2={CX + 36} y2={CY + 24} color="#ffffff" />
        <DbIcon cx={CX - 36} cy={CY + 24} color="#ffffff" />
        <BucketIcon cx={CX + 36} cy={CY + 24} color="#ffffff" />
        <AppIcon cx={CX} cy={CY - 32} color="#ffffff" />
      </g>
    </svg>
  );
}
