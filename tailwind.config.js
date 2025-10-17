export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--color-muted-foreground) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        ring: 'rgb(var(--color-ring) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 16px 40px rgba(15, 23, 42, 0.08)',
        soft: '0 10px 24px rgba(15, 23, 42, 0.05)'
      }
    },
  },
  plugins: [],
};
