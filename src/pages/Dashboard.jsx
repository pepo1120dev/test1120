import { useState } from 'react';
import MetricCard from '../components/MetricCard.jsx';
import SidebarFilters from '../components/SidebarFilters.jsx';
import TabSwitcher from '../components/TabSwitcher.jsx';
import TrendChart from '../components/TrendChart.jsx';
import { comparativeSeries, summaryMetrics } from '../data/dashboard.js';
import ApplicationShell from '../layout/ApplicationShell.jsx';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('acumulativo');

  return (
    <ApplicationShell title="Gestión vinculación acumulativo" breadcrumb="Prevención / Ciudadanía">
      <div className="flex flex-1 flex-col gap-6">
        <section className="rounded-3xl bg-white/80 p-6 shadow-card ring-1 ring-border">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-lg font-bold text-muted">Resultados destacados</h2>
            <TabSwitcher
              tabs={[
                { id: 'acumulativo', label: 'Acumulativo' },
                { id: 'comparativo', label: 'Comparativo' },
                { id: 'territorio', label: 'Territorio' },
              ]}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Seguimiento continuo de la participación ciudadana en procesos de capacitación y actividades territoriales.
          </p>
        </section>

        <section className="metric-grid">
          {summaryMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </section>

        <TrendChart categories={comparativeSeries.categories} series={comparativeSeries.series} />
      </div>
      <SidebarFilters />
    </ApplicationShell>
  );
};

export default Dashboard;
