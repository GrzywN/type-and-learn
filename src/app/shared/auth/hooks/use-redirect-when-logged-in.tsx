import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../utils/routes';
import { useAuth } from './use-auth';

export const useRedirectWhenLoggedIn = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user == null) {
    throw new Error('useRedirectWhenLoggedIn: You need to use AuthProvider in order to use this hook');
  }

  useEffect(() => {
    if (user.currentUser != null) {
      navigate(routes.home.path, { replace: true });
    }
  }, [user, navigate]);
};
