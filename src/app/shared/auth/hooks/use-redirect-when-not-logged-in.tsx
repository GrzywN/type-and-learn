import { routes } from '@utils';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './use-auth';

export const useRedirectWhenNotLoggedIn = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user == null) {
    throw new Error('useRedirectWhenNotLoggedIn: You need to use AuthProvider in order to use this hook');
  }

  useEffect(() => {
    if (user.currentUser == null) {
      navigate(routes.login.path, { replace: true });
    }
  }, [user, navigate]);
};
