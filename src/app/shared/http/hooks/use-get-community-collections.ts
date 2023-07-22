import { useQuery } from '@tanstack/react-query';

import { fetchCommunityCollections } from '../fetchers/fetch-community-collections';
import { useHttpClient } from './use-http-client';

export function useGetCommunityCollections() {
  const { client } = useHttpClient();
  const query = useQuery({
    queryKey: ['community_collections'],
    queryFn: fetchCommunityCollections(client),
  });

  return query;
}
