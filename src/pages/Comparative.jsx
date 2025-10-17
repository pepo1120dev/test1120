import SidebarFilters from '../components/SidebarFilters.jsx';
import TrendChart from '../components/TrendChart.jsx';
import { comparativeSeries } from '../data/dashboard.js';
import ApplicationShell from '../layout/ApplicationShell.jsx';

const Comparative = () => (
  <ApplicationShell title="Gestión vinculación comparativo" breadcrumb="Prevención / Comparativo">
    <div className="flex flex-1 flex-col gap-6">
      <section className="rounded-3xl bg-white/80 p-6 shadow-card ring-1 ring-border">
        <h2 className="text-lg font-bold text-muted">Evolución mensual</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Compara el rendimiento interanual de las iniciativas de vinculación ciudadana para anticipar escenarios y ajustar la planificación.
        </p>
      </section>
      <TrendChart categories={comparativeSeries.categories} series={comparativeSeries.series} height={260} />
    </div>
    <SidebarFilters />
  </ApplicationShell>
);

export default Comparative;
