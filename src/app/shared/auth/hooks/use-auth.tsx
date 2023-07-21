import { useContext } from 'react';

import { AuthContext } from '../context/auth-context';
import { UserContext } from '../context/user-context';

export const useAuth = () => {
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);

  if (auth == null || user == null) {
    throw new Error('useAuth: You need to use AuthProvider in order to use this hook');
  }

  return { auth, user };
};
