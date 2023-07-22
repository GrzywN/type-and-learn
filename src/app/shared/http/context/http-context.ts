import { createContext } from 'react';

import { HttpAdapter } from '../types/http-adapter';

export type HttpContext = HttpAdapter;

export const HttpContext = createContext<HttpContext | null>(null);
