import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './app-routes';
import { DefaultLayout } from './layouts/default-layout/default-layout';
import { ThemeProvider } from './shared/theme/theme-provider';

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <DefaultLayout>
          <AppRoutes />
        </DefaultLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
