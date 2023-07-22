import { Collection, CollectionName } from '../models/collection';
import type { HttpAdapter } from '../types/http-adapter';

const responses = {
  user_collections: {
    collectionId: 'mdjuo47l27at6d1',
    collectionName: 'user_collections',
    created: '2023-07-22 10:36:12.205Z',
    description: 'This should NOT be in community tab',
    id: '81f1j7v5vtlapha',
    name: 'Private collection',
    updated: '2023-07-22 10:36:22.318Z',
    user_id: 'bhz378bl2nqhdce',
  },
  community_collections: {
    collectionId: 'ssqq56ue105xkfd',
    collectionName: 'community_collections',
    created: '2023-07-21 10:26:19.802Z',
    description: 'Fiszki ze słownictwem z książki English 4 IT.',
    id: 'pbopa1pt2encplq',
    name: 'English 4 IT',
    updated: '2023-07-22 10:14:36.352Z',
    user_id: 'bhz378bl2nqhdce',
  },
};

export class MockHttpAdapter implements HttpAdapter {
  async create(
    collection: CollectionName,
    data: Collection<CollectionName>
  ): Promise<Collection<CollectionName>> {
    return new Promise((resolve) => {
      resolve(responses[collection]);
    });
  }

  async getOne(collection: CollectionName, id: string): Promise<Collection<CollectionName>> {
    return new Promise((resolve) => {
      resolve(responses[collection]);
    });
  }

  async getAll(collection: CollectionName): Promise<Collection<CollectionName>[]> {
    return new Promise((resolve) => {
      resolve([responses[collection]]);
    });
  }

  async update(
    collection: CollectionName,
    id: string,
    data: Collection<CollectionName>
  ): Promise<Collection<CollectionName>> {
    return new Promise((resolve) => {
      resolve(responses[collection]);
    });
  }

  async deleteOne(collection: CollectionName, id: string): Promise<boolean> {
    return new Promise((resolve) => resolve(true));
  }
}
