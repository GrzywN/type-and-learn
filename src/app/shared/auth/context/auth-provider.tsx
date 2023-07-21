import { useLocalStorage } from '@mantine/hooks';

import { AuthAdapter, User } from '../types';
import { AuthContext } from './auth-context';
import { UserContext } from './user-context';

let instance: AuthAdapter;
export const getAuth = () => instance;

export interface AuthProviderProps {
  children: React.ReactNode;
  auth: AuthAdapter;
}

export function AuthProvider(props: AuthProviderProps) {
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
