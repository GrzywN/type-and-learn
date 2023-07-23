import { useRedirectWhenNotLoggedIn } from '@auth';
import { routes } from '@utils';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('@features/auth/pages/login/login'));
const Register = lazy(() => import('@features/auth/pages/register/register'));
const CommunityFlashcards = lazy(() => import('@features/community-flashcards/community-flashcards'));
const Settings = lazy(() => import('@features/settings/settings'));
const Home = lazy(() => import('@features/home/home'));
const TypingPractice = lazy(() => import('@features/typing-practice/typing-practice'));
const YourFlashcards = lazy(() => import('@features/your-flashcards/your-flashcards'));
const DefaultLayout = lazy(() => import('@layouts/default-layout/default-layout'));

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
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

export default AppRoutes;
