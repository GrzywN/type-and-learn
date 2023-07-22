import { parseUserCollection } from '../models/user-collection';
import { HttpAdapter } from '../types/http-adapter';

export const fetchUserCollections = (client: HttpAdapter) => async () => {
  const results = await client.getAll('user_collections');
  return results.map((result) => parseUserCollection(result));
};
