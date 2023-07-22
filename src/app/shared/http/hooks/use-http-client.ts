import { useContext } from 'react';

import { HttpContext } from '../context/http-context';

export function useHttpClient() {
  const client = useContext(HttpContext);

  if (client == null) {
    throw new Error('useHttp: You need to use HttpProvider in order to use this hook');
  }

  return { client };
}
