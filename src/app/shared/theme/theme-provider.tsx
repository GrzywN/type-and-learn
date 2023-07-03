import { MantineProvider } from '@mantine/core';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const fontFamily = "'Work Sans', sans-serif";

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        respectReducedMotion: true,
        cursorType: 'pointer',
        defaultRadius: 'sm',
        fontFamily,
        dir: 'ltr',
        loader: 'dots',
        primaryColor: 'cyan',
      }}
    >
      {children}
    </MantineProvider>
  );
}
