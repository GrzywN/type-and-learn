import { Route, Routes } from 'react-router-dom';

import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { CommunityFlashcards } from './features/community-flashcards/community-flashcards';
import { Home } from './features/home/home';
import { Settings } from './features/settings/settings';
import { TypingPractice } from './features/typing-practice/typing-practice';
import { YourFlashcards } from './features/your-flashcards/your-flashcards';
import { DefaultLayout } from './layouts/default-layout/default-layout';
import { useRedirectWhenNotLoggedIn } from './shared/utils/auth';
import { routes } from './shared/utils/routes';

export interface PrivateRouteProps {
  children: React.ReactNode;
}

export function PrivateRoute(props: PrivateRouteProps) {
  const { children } = props;

  useRedirectWhenNotLoggedIn();

  return <DefaultLayout>{children}</DefaultLayout>;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.login.path} element={<Login />} />
      <Route path={routes.register.path} element={<Register />} />
      <Route
        path={routes.home.path}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.playOne.path}
        element={
          <PrivateRoute>
            <TypingPractice />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.playAll.path}
        element={
          <PrivateRoute>
            <TypingPractice />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.flashcards.path}
        element={
          <PrivateRoute>
            <YourFlashcards />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.community.path}
        element={
          <PrivateRoute>
            <CommunityFlashcards />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.settings.path}
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
