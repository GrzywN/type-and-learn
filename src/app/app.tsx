import { AuthProvider, PocketbaseAuthAdapter } from '@auth';
import { HttpProvider, PocketbaseHttpAdapter } from '@http';
import { ThemeProvider } from '@theme';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './app-routes';

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
