import { createTheme } from '@nextui-org/react';

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}, // override dark theme colors
    breakpoints: {
      xs: '650px',
      sm: '960px',
      md: '1280px',
      lg: '1400px',
      xl: '1920px',
    },
  },
});
