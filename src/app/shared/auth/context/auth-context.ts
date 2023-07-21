import { createContext } from 'react';

import { AuthAdapter } from '../types/auth-adapter';

export type AuthContext = AuthAdapter;

export const AuthContext = createContext<AuthContext | null>(null);
