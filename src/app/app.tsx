import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './app-routes';
import { AuthProvider, PocketbaseAuthAdapter } from './shared/auth';
import { HttpProvider, PocketbaseHttpAdapter } from './shared/http';
import { ThemeProvider } from './shared/theme/theme-provider';

const http = new PocketbaseHttpAdapter();
const auth = new PocketbaseAuthAdapter();

export function App() {
  return (
    <ThemeProvider>
      <HttpProvider http={http}>
        <AuthProvider auth={auth}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </HttpProvider>
    </ThemeProvider>
  );
}

export default App;
