import { dynamicFilters } from '../data/dashboard.js';

const FilterGroup = ({ label, options }) => (
  <div className="rounded-2xl bg-white/80 p-4 shadow-soft ring-1 ring-border">
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-bold uppercase tracking-wide text-muted">{label}</h3>
      <span className="text-xs font-semibold text-secondary">Editar</span>
    </div>
    <div className="mt-3 space-y-2">
      {options.map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-center justify-between rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition hover:border-border hover:bg-slate-100/80"
        >
          <span>{option}</span>
          <input type="checkbox" className="accent-primary" />
        </label>
      ))}
    </div>
  </div>
);

const SidebarFilters = () => (
  <aside className="flex w-full flex-col gap-5 lg:max-w-xs">
    <div className="rounded-3xl bg-white/95 p-5 shadow-card ring-1 ring-border">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-muted">Gestión vinculación</h2>
        <button className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground transition hover:border-primary hover:text-primary">
          Quitar filtros
        </button>
      </div>
      <p className="mt-1 text-xs text-muted-foreground/70">
        Controla los indicadores filtrando por año, zona y tipo de intervención.
      </p>
    </div>
    <FilterGroup label="Año" options={dynamicFilters.year.map(String)} />
    <FilterGroup label="Mes" options={dynamicFilters.month} />
    <FilterGroup label="Capacitaciones" options={dynamicFilters.training} />
    <FilterGroup label="Zonas" options={dynamicFilters.zones} />
    <FilterGroup label="Temas" options={dynamicFilters.themes} />
  </aside>
);

export default SidebarFilters;
