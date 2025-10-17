export const colorProfiles = {
  crimsonPulse: {
    name: 'Crimson Pulse',
    primary: '217 49 56',
    secondary: '21 128 61',
    accent: '240 82 82',
    surface: '255 255 255',
    muted: '15 23 42',
    'muted-foreground': '99 102 121',
    border: '226 232 240',
    ring: '217 49 56',
  },
  emeraldLake: {
    name: 'Emerald Lake',
    primary: '5 122 85',
    secondary: '12 74 110',
    accent: '217 119 6',
    surface: '255 255 255',
    muted: '15 23 42',
    'muted-foreground': '71 85 105',
    border: '226 232 240',
    ring: '5 122 85',
  },
  twilightIndigo: {
    name: 'Twilight Indigo',
    primary: '79 70 229',
    secondary: '220 38 38',
    accent: '14 116 144',
    surface: '248 250 252',
    muted: '15 23 42',
    'muted-foreground': '100 116 139',
    border: '203 213 225',
    ring: '79 70 229',
  },
  corporateSky: {
    name: 'Corporate Sky',
    primary: '2 132 199',
    secondary: '21 94 117',
    accent: '15 118 110',
    surface: '255 255 255',
    muted: '15 23 42',
    'muted-foreground': '71 85 105',
    border: '226 232 240',
    ring: '2 132 199',
  },
};

export const defaultProfileKey = 'crimsonPulse';

export const toCssVariables = (profile) =>
  Object.entries(profile).reduce((acc, [token, value]) => {
    if (token === 'name') return acc;
    return { ...acc, [`--color-${token}`]: value };
  }, {});
