import Pocketbase from 'pocketbase';

import { Collection, CollectionName } from '../models/collection';
import type { HttpAdapter } from '../types/http-adapter';

export class PocketbaseHttpAdapter implements HttpAdapter {
  private pocketbase: Pocketbase;

  constructor() {
    this.pocketbase = new Pocketbase(import.meta.env.VITE_POCKETBASE_URL);
  }

  async create(
    collection: CollectionName,
    data: Collection<CollectionName>
  ): Promise<Collection<CollectionName>> {
    return this.pocketbase.collection(collection).create(data);
  }

  async getOne(collection: CollectionName, id: string): Promise<Collection<CollectionName>> {
    const result = await this.pocketbase.collection(collection).getOne(id);
    return result.items;
  }

  async getAll(collection: CollectionName): Promise<Collection<CollectionName>[]> {
    const result = await this.pocketbase.collection(collection).getList<Collection<CollectionName>>();
    return result.items;
  }

  async update(
    collection: CollectionName,
    id: string,
    data: Collection<CollectionName>
  ): Promise<Collection<CollectionName>> {
    const result = await this.pocketbase.collection(collection).update(id, data);
    return result.items;
  }

  async deleteOne(collection: CollectionName, id: string): Promise<boolean> {
    const isDeleted = await this.pocketbase.collection(collection).delete(id);
    return isDeleted;
  }
}
