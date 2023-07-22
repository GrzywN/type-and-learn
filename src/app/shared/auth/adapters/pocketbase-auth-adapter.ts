import Pocketbase from 'pocketbase';

import type { AuthAdapter, User } from '../types';

export class PocketbaseAuthAdapter implements AuthAdapter {
  private pocketbase: Pocketbase;

  constructor() {
    this.pocketbase = new Pocketbase(import.meta.env.VITE_POCKETBASE_URL);
  }

  async login(email: string, password: string): Promise<User | null> {
    try {
      const authData = await this.pocketbase.collection('users').authWithPassword(email, password);

      return {
        username: authData.record.username,
        email,
      };
    } catch (error) {
      console.error('PocketbaseAuthAdapter: Login failed', error);
      return null;
    }
  }

  async register(email: string, password: string, username: string): Promise<User | null> {
    try {
      await this.pocketbase.collection('users').create({
        username,
        email: email,
        emailVisibility: true,
        password: password,
        passwordConfirm: password,
      });
    } catch (error) {
      console.error('PocketbaseAuthAdapter: Registration failed', error);
      return null;
    }

    return {
      username: username,
      email,
    };
  }

  async logout(): Promise<null> {
    return new Promise((resolve) => {
      this.pocketbase.authStore.clear();
      resolve(null);
    });
  }
}
