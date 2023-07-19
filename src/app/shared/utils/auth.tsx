import { useLocalStorage } from '@mantine/hooks';
import { ReactNode, createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from './routes';

export interface AuthAdapter {
  login(email: string, password: string): Promise<User | null>;

  register(email: string, password: string, username: string): Promise<User | null>;

  logout(): Promise<User | null>;
}

export interface User {
  username: string;
  email: string;
}

export interface UserContext {
  currentUser: User | null;
}

export const AuthContext = createContext<AuthAdapter | null>(null);
export const UserContext = createContext<UserContext | null>(null);

let instance: AuthAdapter;
export const getAuth = () => instance;

export interface UserContextProviderProps {
  children: ReactNode;
  auth: AuthAdapter;
}

export function AuthProvider(props: UserContextProviderProps) {
  const { children, auth } = props;

  const [currentUser, setCurrentUser] = useLocalStorage<User | null>({
    key: 'current-user',
    defaultValue: null,
    getInitialValueInEffect: false,
  });

  const login = async (email: string, password: string) => {
    const user = await auth.login(email, password);
    setCurrentUser(user);
    return user;
  };

  const register = async (email: string, password: string, username: string) => {
    const user = await auth.register(email, password, username);
    setCurrentUser(user);
    return user;
  };

  const logout = async () => {
    const user = await auth.logout();
    setCurrentUser(user);
    return user;
  };

  return (
    <AuthContext.Provider value={{ login, register, logout }}>
      <UserContext.Provider value={{ currentUser }}>{children}</UserContext.Provider>
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);

  if (auth == null || user == null) {
    throw new Error('useAuth: You need to use AuthProvider in order to use this hook');
  }

  return { auth, user };
};

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

export const useRedirectWhenLoggedIn = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user == null) {
    throw new Error('useRedirectWhenNotLoggedIn: You need to use AuthProvider in order to use this hook');
  }

  useEffect(() => {
    if (user.currentUser != null) {
      navigate(routes.home.path, { replace: true });
    }
  }, [user, navigate]);
};
