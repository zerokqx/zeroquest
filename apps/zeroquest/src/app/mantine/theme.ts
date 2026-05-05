import { createTheme } from '@mantine/core';
export const theme = createTheme({
  colors: {},

  primaryColor: 'violet',
  primaryShade: { light: 9, dark: 9 },
  defaultGradient: {
    from: 'violet',
    to: 'white',
    deg: 135,
  },
  fontFamily: 'Roboto, Open Sans',
  headings: {
    fontFamily: 'Open Sans',
  },
});
