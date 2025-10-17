import { useTheme } from '../theme/ThemeContext.jsx';

const ThemeSwitcher = () => {
  const { activeProfile, setActiveProfile, profiles } = useTheme();

  return (
    <div className="rounded-2xl bg-white/80 px-5 py-4 shadow-soft ring-1 ring-border">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-muted-foreground">Personalizar colores</p>
          <p className="text-xs text-muted-foreground/70">
            Selecciona el esquema corporativo para aplicar de inmediato.
          </p>
        </div>
        <select
          value={activeProfile}
          onChange={(event) => setActiveProfile(event.target.value)}
          className="rounded-xl border border-border bg-white px-3 py-2 text-sm font-semibold text-muted shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          {Object.entries(profiles).map(([key, profile]) => (
            <option key={key} value={key}>
              {profile.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
