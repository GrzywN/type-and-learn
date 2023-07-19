import { BrowserRouter } from 'react-router-dom';

import { PocketbaseAuthAdapter } from '../environments/auth/pocketbase-auth-adapter';
import { AppRoutes } from './app-routes';
import { ThemeProvider } from './shared/theme/theme-provider';
import { AuthProvider } from './shared/utils/auth';

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
