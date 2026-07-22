"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

interface AgileLoopGraphicProps {
  className?: string;
}

const CX = 500;
const CY = 500;
const RADIUS = 350;
const NODE_R = 98;
const LINE_COLOR = "#b31c33";
const NODE_FILL = "#ffffff";
const NODE_STROKE = "#e2bebd";
const ICON_COLOR = "#7a4a4a";

const STAGES = [
  { label: "Discover" },
  { label: "Design" },
  { label: "Prototype" },
  { label: "Develop" },
  { label: "Test" },
  { label: "Review" },
  { label: "Iterate" },
];

function DiscoverIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g stroke={color} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx={cx - 4} cy={cy - 4} r={13} />
      <line x1={cx + 6} y1={cy + 6} x2={cx + 15} y2={cy + 15} />
    </g>
  );
}

function DesignIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g stroke={color} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${cx - 13} ${cy + 13} l 3 -11 l 18 -18 a 4.5 4.5 0 0 1 6 6 l -18 18 z`} />
    </g>
  );
}

function PrototypeIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g stroke={color} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${cx} ${cy - 15} l 15 8 l -15 8 l -15 -8 z`} />
      <path d={`M ${cx - 15} ${cy - 1} l 15 8 l 15 -8`} />
      <path d={`M ${cx - 15} ${cy + 7} l 15 8 l 15 -8`} />
    </g>
  );
}

function DevelopIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g stroke={color} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d={`M ${cx - 4} ${cy - 15} a 7 7 0 0 0 -9 9 l -7 7 l 5 5 l 7 -7 a 7 7 0 0 0 9 -9 l -5 -5 z`}
      />
    </g>
  );
}

function TestIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g stroke={color} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x={cx - 14} y={cy - 14} width={28} height={28} rx={6} />
      <path d={`M ${cx - 7} ${cy} l 5 6 l 10 -12`} />
    </g>
  );
}

function ReviewIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g stroke={color} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${cx - 16} ${cy} q 16 -14 32 0 q -16 14 -32 0 z`} />
      <circle cx={cx} cy={cy} r={5} />
    </g>
  );
}

function IterateIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g stroke={color} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${cx - 13} ${cy - 2} a 13 13 0 1 1 3 8`} />
      <path d={`M ${cx - 13} ${cy - 9} v 7 h 7`} />
    </g>
  );
}

function RunningIcon({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g stroke={color} strokeWidth={3.4} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx={cx + 6} cy={cy - 30} r={7.5} fill={color} stroke="none" />
      <path d={`M ${cx + 3} ${cy - 21} l -9 11 l 5 9`} />
      <path d={`M ${cx - 6} ${cy - 10} l 15 -5 l 7 11`} />
      <path d={`M ${cx - 1} ${cy - 1} l -13 7 l -7 13`} />
      <path d={`M ${cx - 1} ${cy - 1} l 10 7 l 3 16`} />
    </g>
  );
}

const STAGE_ICONS = [
  DiscoverIcon,
  DesignIcon,
  PrototypeIcon,
  DevelopIcon,
  TestIcon,
  ReviewIcon,
  IterateIcon,
];

/** Point on the RADIUS circle at a given angle (degrees, 0 = right, clockwise). */
function pointAt(angleDeg: number) {
  const a = (angleDeg * Math.PI) / 180;
  // Rounded to avoid a hydration mismatch: Math.cos/sin can differ in their
  // last float digit between the server and browser JS engines.
  return {
    x: Math.round((CX + RADIUS * Math.cos(a)) * 1000) / 1000,
    y: Math.round((CY + RADIUS * Math.sin(a)) * 1000) / 1000,
  };
}

export default function AgileLoopGraphic({ className = "" }: AgileLoopGraphicProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const ringRef = useRef<SVGGElement>(null);
  const nodeRefs = useRef<(SVGGElement | null)[]>([]);

  const step = 360 / STAGES.length;
  const angles = STAGES.map((_, i) => -90 + i * step);
  const nodes = angles.map((a, i) => ({ ...pointAt(a), angle: a, Icon: STAGE_ICONS[i], label: STAGES[i].label }));

  // Curved arcs connecting each node to the next, offset slightly inward so
  // they don't tunnel through the node circles, with an arrowhead at the end.
  const arcOffset = Math.min(14, step / 3);
  const arcs = nodes.map((n, i) => {
    const next = nodes[(i + 1) % nodes.length];
    const startAngle = n.angle + arcOffset;
    const endAngle = next.angle - arcOffset;
    const start = pointAt(startAngle);
    const end = pointAt(endAngle);
    return `M ${start.x} ${start.y} A ${RADIUS} ${RADIUS} 0 0 1 ${end.x} ${end.y}`;
  });

  // ─── EXPERIMENTAL: the ring spins clockwise like a wheel ───────────────────
  // Self-contained — delete this hook, drop the two refs above, and un-nest
  // the two groups marked below back to plain fragments, to fully revert.
  //
  // Uses GSAP's `svgOrigin` (the SVG's own user-unit coordinate space — the
  // same numbers `pointAt()` already produces) instead of CSS `transformOrigin`
  // percentages, which GSAP resolves against each element's own bounding box
  // for SVG targets rather than the viewBox — a common source of "rotates
  // around the wrong point" bugs. `svgOrigin` sidesteps that entirely.
  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion || !ringRef.current) return;

      const REVOLUTION = 24; // seconds for one full clockwise lap

      // The whole ring (arcs + node circles) rotates around the graphic's center...
      gsap.to(ringRef.current, {
        rotation: 360,
        svgOrigin: `${CX} ${CY}`,
        duration: REVOLUTION,
        ease: "none",
        repeat: -1,
      });

      // ...while each node spins the opposite way around its OWN position
      // (not the shared center), at the same rate, so its icon and label
      // stay upright as it orbits.
      nodes.forEach((n, i) => {
        const el = nodeRefs.current[i];
        if (!el) return;
        gsap.to(el, {
          rotation: -360,
          svgOrigin: `${n.x} ${n.y}`,
          duration: REVOLUTION,
          ease: "none",
          repeat: -1,
        });
      });
    },
    { scope: svgRef }
  );
  // ─── end experimental block ─────────────────────────────────────────────────

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid meet"
      className={`w-full h-full ${className}`}
      role="img"
      aria-label="The seven agile delivery stages — discover, design, prototype, develop, test, review, iterate — orbiting clockwise in a repeating loop"
    >
      <defs>
        <marker id="agile-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill={LINE_COLOR} />
        </marker>
      </defs>

      {/* EXPERIMENTAL — this group is what spins (see useGSAP above). Un-nest back to a fragment to revert. */}
      <g ref={ringRef}>
        {arcs.map((d, i) => (
          <path
            key={`arc-${i}`}
            d={d}
            fill="none"
            stroke={LINE_COLOR}
            strokeWidth={2}
            strokeDasharray="1 9"
            strokeLinecap="round"
            markerEnd="url(#agile-arrow)"
          />
        ))}

        {/* Stage nodes */}
        {nodes.map((n, i) => (
          <g key={`node-${i}`}>
            <circle cx={n.x} cy={n.y} r={NODE_R} fill={NODE_FILL} stroke={NODE_STROKE} strokeWidth={1.5} />
            {/* EXPERIMENTAL — counter-rotates so the icon/label stay upright while the ring spins. Un-nest to revert. */}
            <g ref={(el) => { nodeRefs.current[i] = el; }}>
              <g transform={`translate(${n.x} ${n.y - 18}) scale(1.35) translate(${-n.x} ${-(n.y - 18)})`}>
                <n.Icon cx={n.x} cy={n.y - 18} color={ICON_COLOR} />
              </g>
              <text
                x={n.x}
                y={n.y + 42}
                textAnchor="middle"
                fill="#1c1b1b"
                fontSize="32"
                fontFamily="var(--font-headline, serif)"
              >
                {n.label}
              </text>
            </g>
          </g>
        ))}
      </g>

      {/* Center — agile, always moving — stays fixed as the ring orbits around it */}
      <circle cx={CX} cy={CY} r={96} fill="#1c1b1b" />
      <RunningIcon cx={CX} cy={CY + 8} color="#ffffff" />
      <text x={CX} y={CY + 46} textAnchor="middle" fill="#ffffff" fontSize="19" fontWeight={700} letterSpacing="3" fontFamily="var(--font-body, sans-serif)">
        AGILE
      </text>
    </svg>
  );
}
