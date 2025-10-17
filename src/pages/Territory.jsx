import SidebarFilters from '../components/SidebarFilters.jsx';
import TerritoryCard from '../components/TerritoryCard.jsx';
import { territoryMetrics } from '../data/dashboard.js';
import ApplicationShell from '../layout/ApplicationShell.jsx';

const Territory = () => (
  <ApplicationShell title="Gestión vinculación territorio" breadcrumb="Prevención / Territorio">
    <div className="flex flex-1 flex-col gap-6">
      <section className="rounded-3xl bg-white/80 p-6 shadow-card ring-1 ring-border">
        <h2 className="text-lg font-bold text-muted">Presencia territorial</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Visualiza la cobertura de actividades comunitarias, ferias y mingas organizadas en las diferentes zonas.
        </p>
      </section>
      <section className="metric-grid">
        {territoryMetrics.map((metric) => (
          <TerritoryCard key={metric.label} {...metric} />
        ))}
      </section>
    </div>
    <SidebarFilters />
  </ApplicationShell>
);

export default Territory;
