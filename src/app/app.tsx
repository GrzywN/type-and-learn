import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './app-routes';
import { AuthProvider, PocketbaseAuthAdapter } from './shared/auth';
import { ThemeProvider } from './shared/theme/theme-provider';

const auth = new PocketbaseAuthAdapter();

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider auth={auth}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
