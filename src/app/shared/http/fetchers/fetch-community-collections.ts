import { parseCommunityCollection } from '../models/community-collection';
import { HttpAdapter } from '../types/http-adapter';

export const fetchCommunityCollections = (client: HttpAdapter) => async () => {
  const results = await client.getAll('community_collections');
  return results.map((result) => parseCommunityCollection(result));
};
