import { NavLink } from 'react-router-dom';
import ThemeSwitcher from '../components/ThemeSwitcher.jsx';

const navigation = [
  { to: '/', label: 'Acumulativo' },
  { to: '/comparativo', label: 'Comparativo' },
  { to: '/territorio', label: 'Territorio' },
  { to: '/registros', label: 'Registros dinámicos' },
];

const ApplicationShell = ({ title, breadcrumb, children }) => (
  <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-fixed bg-center">
    <div className="min-h-screen bg-gradient-to-tr from-white/95 via-white/90 to-white/85">
      <header className="border-b border-white/50 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-secondary">
              <span>Cuadro de mando integral</span>
              <span className="text-muted-foreground">/</span>
              <span>{breadcrumb}</span>
            </div>
            <h1 className="text-3xl font-black text-muted">{title}</h1>
            <p className="text-sm text-muted-foreground">
              Plataforma web empresarial para seguimiento de indicadores, formularios dinámicos y analítica interactiva.
            </p>
            <nav className="mt-3 flex flex-wrap gap-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-5 py-2 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-primary text-white shadow-soft'
                        : 'bg-white/70 text-muted-foreground hover:bg-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="w-full max-w-sm">
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row">
        {children}
      </main>
    </div>
  </div>
);

export default ApplicationShell;
