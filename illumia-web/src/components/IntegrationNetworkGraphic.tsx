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

function ServerIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  const x0 = cx - 13;
  const y0 = cy - 14;
  return (
    <g stroke={color} strokeWidth={1.6} fill="none" strokeLinecap="round">
      <rect x={x0} y={y0} width={26} height={28} rx={2} />
      <line x1={x0} y1={y0 + 9.3} x2={x0 + 26} y2={y0 + 9.3} />
      <line x1={x0} y1={y0 + 18.7} x2={x0 + 26} y2={y0 + 18.7} />
      <circle cx={x0 + 5} cy={y0 + 4.7} r={1.1} fill={color} stroke="none" />
      <circle cx={x0 + 5} cy={y0 + 14} r={1.1} fill={color} stroke="none" />
      <circle cx={x0 + 5} cy={y0 + 23.3} r={1.1} fill={color} stroke="none" />
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
      <g transform={`translate(${offsetX} ${offsetY})`}>
        {/* Connecting lines + midpoint dots */}
        {points.map((p, i) => (
          <g key={`line-${i}`}>
            <line
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              stroke={LINE_COLOR}
              strokeWidth={2}
              strokeDasharray="2 10"
              strokeLinecap="round"
            />
            <circle cx={(CX + p.x) / 2} cy={(CY + p.y) / 2} r={5} fill={LINE_COLOR} />
          </g>
        ))}

        {/* Satellite nodes */}
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
            <p.Icon cx={p.x} cy={p.y} color={SAT_ICON_COLOR} />
          </g>
        ))}

        {/* Center node — App / Database / Server, arranged in a tight triangle */}
        <rect x={CX - 70} y={CY - 60} width={140} height={120} rx={18} fill={centerFill} />
        <DbIcon cx={CX} cy={CY - 32} color="#ffffff" />
        <AppIcon cx={CX - 36} cy={CY + 24} color="#ffffff" />
        <ServerIcon cx={CX + 36} cy={CY + 24} color="#ffffff" />
      </g>
    </svg>
  );
}
