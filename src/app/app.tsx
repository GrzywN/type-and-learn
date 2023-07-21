import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './app-routes';
import { ReactQueryProvider } from './react-query';
import { AuthProvider, PocketbaseAuthAdapter } from './shared/auth';
import { ThemeProvider } from './shared/theme/theme-provider';

const auth = new PocketbaseAuthAdapter();

export function App() {
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        <AuthProvider auth={auth}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}

export default App;
