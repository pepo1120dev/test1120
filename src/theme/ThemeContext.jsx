import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { colorProfiles, defaultProfileKey, toCssVariables } from './palettes.js';

const ThemeContext = createContext();

const applyProfile = (profileKey) => {
  const profile = colorProfiles[profileKey];
  if (!profile) return;
  const cssVariables = toCssVariables(profile);
  const root = document.documentElement;

  Object.entries(cssVariables).forEach(([token, value]) => {
    root.style.setProperty(token, value);
  });
};

export const ThemeProvider = ({ children }) => {
  const [activeProfile, setActiveProfile] = useState(defaultProfileKey);

  useEffect(() => {
    applyProfile(activeProfile);
  }, [activeProfile]);

  const contextValue = useMemo(
    () => ({
      activeProfile,
      setActiveProfile,
      profiles: colorProfiles,
    }),
    [activeProfile]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
};
