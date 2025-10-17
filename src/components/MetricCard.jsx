import clsx from 'clsx';

const TrendBadge = ({ delta, trend }) => (
  <span
    className={clsx('badge-pill text-xs', {
      'bg-secondary/15 text-secondary': trend === 'up',
      'bg-red-100 text-red-600': trend === 'down'
    })}
  >
    {trend === 'up' ? '▲' : '▼'} {delta}%
  </span>
);

const MetricCard = ({ label, value, delta, trend }) => (
  <article className="glass-panel flex flex-col gap-4 rounded-3xl border border-white/40 p-6 text-muted shadow-card">
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{label}</h3>
      {delta != null && trend ? <TrendBadge delta={delta} trend={trend} /> : null}
    </div>
    <p className="text-3xl font-extrabold text-muted">{value.toLocaleString('es-ES')}</p>
  </article>
);

export default MetricCard;
