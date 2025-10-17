const TerritoryCard = ({ icon, label, value }) => (
  <article className="glass-panel flex flex-col gap-3 rounded-3xl border border-white/50 p-6 text-muted shadow-card">
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-2xl">
        {icon}
      </span>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{label}</h3>
    </div>
    <p className="text-3xl font-extrabold">{value.toLocaleString('es-ES')}</p>
  </article>
);

export default TerritoryCard;
