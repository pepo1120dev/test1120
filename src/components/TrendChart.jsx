import clsx from 'clsx';
import { useMemo } from 'react';

const ChartLine = ({ points, color }) => (
  <polyline
    fill="none"
    stroke={`rgb(var(--color-${color}))`}
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    points={points}
  />
);

const TrendChart = ({ categories, series, height = 240 }) => {
  const chartPoints = useMemo(() => {
    const maxValue = Math.max(...series.flatMap((serie) => serie.data));

    const horizontalGap = 100 / Math.max(1, categories.length - 1);

    return series.map((serie) => {
      const points = serie.data
        .map((value, index) => {
          const x = index * horizontalGap;
          const y = 100 - (value / maxValue) * 100;
          return `${x},${y}`;
        })
        .join(' ');

      return {
        label: serie.label,
        color: serie.color,
        values: serie.data,
        points,
      };
    });
  }, [categories, series]);

  return (
    <div className="rounded-3xl bg-white/95 p-6 shadow-card ring-1 ring-border">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-muted">Comparativo anual</h3>
        <div className="flex items-center gap-3 text-xs">
          {chartPoints.map((serie) => (
            <span key={serie.label} className="flex items-center gap-2 font-semibold text-muted-foreground">
              <span
                className={clsx('h-2 w-2 rounded-full', {
                  'bg-primary': serie.color === 'primary',
                  'bg-secondary': serie.color === 'secondary',
                  'bg-accent': serie.color === 'accent',
                })}
              ></span>
              {serie.label}
            </span>
          ))}
        </div>
      </div>
      <svg className="mt-6 w-full" height={height} viewBox="0 0 100 100" preserveAspectRatio="none">
        {chartPoints.map((serie) => (
          <ChartLine key={serie.label} points={serie.points} color={serie.color} />
        ))}
      </svg>
      <div className="mt-4 grid grid-cols-6 gap-3 text-center text-xs font-semibold text-muted-foreground">
        {categories.map((category) => (
          <span key={category} className="rounded-full bg-slate-100/70 px-3 py-1">
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrendChart;
