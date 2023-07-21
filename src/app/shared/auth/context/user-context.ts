import { createContext } from 'react';

import { User } from '../types';

export interface UserContext {
  currentUser: User | null;
}

export const UserContext = createContext<UserContext | null>(null);
