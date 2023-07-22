import { useQuery } from '@tanstack/react-query';

import { fetchUserCollections } from '../fetchers/fetch-user-collections';
import { useHttpClient } from './use-http-client';

export function useGetUserCollections() {
  const { client } = useHttpClient();
  const query = useQuery({
    queryKey: ['user_collections'],
    queryFn: fetchUserCollections(client),
  });

  return query;
}
