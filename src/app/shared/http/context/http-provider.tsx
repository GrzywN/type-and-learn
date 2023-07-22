import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { HttpAdapter } from '../types/http-adapter.d';
import { HttpContext } from './http-context';

const queryClient = new QueryClient();

export interface HttpProviderProps {
  http: HttpAdapter;
  children: React.ReactNode;
}

export function HttpProvider(props: HttpProviderProps) {
  const { http: httpClient, children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <HttpContext.Provider value={httpClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </HttpContext.Provider>
    </QueryClientProvider>
  );
}
