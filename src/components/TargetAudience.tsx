import { useId } from "react";

export default function TargetAudience() {
  return (
    <div id="audiences" className="max-w-7xl mx-auto pt-25 px-4 md:px-8 lg:px-10">
      <h2 className="text-4xl mb-4 text-black dark:text-white max-w-4xl">
        Designed for Everyone
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-lg mb-10">
        Empowers users across different backgrounds to turn raw data into meaningful insights—without needing deep technical skills.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-xl font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20 max-w-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Business Analysts",
    description:
      "Quickly generate reports and dashboards without relying on technical teams.",
  },
  {
    title: "Students & Researchers",
    description:
      "Analyze datasets for projects, papers, and theses—even with minimal SQL knowledge.",
  },
  {
    title: "Non-Technical Users",
    description:
      "Ask questions in everyday language and get instant visual insights.",
  },
  {
    title: "Developers & Data Engineers",
    description:
      "Use form-based or manual SQL for structured control with export-ready visualizations.",
  },
  {
    title: "Startups & SMEs",
    description:
      "Affordable, offline-first BI for internal insights without cloud lock-in.",
  },
  {
    title: "Solo Creators & Freelancers",
    description:
      "Turn client data into clean dashboards and export charts for reports.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white dark:stroke-white stroke-blue-500 fill-blue-500"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares.map(([x, y]: any, index: number) => (
        <rect
          strokeWidth="0"
          key={`${x}-${y}-${index}`} // Now guaranteed to be unique
          width={width + 1}
          height={height + 1}
          x={x * width}
          y={y * height}
        />
      ))}

    </svg>
  );
}
