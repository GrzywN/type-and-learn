import { Collection, CollectionName } from '../models/collection';

export interface HttpAdapter {
  create: (
    collection: CollectionName,
    data: Collection<CollectionName>
  ) => Promise<Collection<CollectionName>>;

  getOne: (collection: CollectionName, id: string) => Promise<Collection<CollectionName>>;

  getAll: (collection: CollectionName) => Promise<Collection<CollectionName>[]>;

  update: (
    collection: CollectionName,
    id: string,
    data: Collection<CollectionName>
  ) => Promise<Collection<CollectionName>>;

  deleteOne: (collection: CollectionName, id: string) => Promise<boolean>;
}
