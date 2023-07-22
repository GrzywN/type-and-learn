import { CommunityCollection } from './community-collection';
import { UserCollection } from './user-collection';

export type CollectionName = 'community_collections' | 'user_collections';

export type Collection<CollectionName> = CollectionName extends 'community_collections'
  ? CommunityCollection
  : CollectionName extends 'user_collections'
  ? UserCollection
  : never;
