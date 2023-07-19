import type { AuthAdapter, User } from '../../app/shared/utils/auth';

export class MockAuthAdapter implements AuthAdapter {
  async login(email: string, password: string): Promise<User | null> {
    return {
      username: 'username',
      email: 'example@example.com',
    };
  }

  async register(email: string, password: string, username: string): Promise<User | null> {
    return {
      username: 'username',
      email: 'example@example.com',
    };
  }

  async logout(): Promise<null> {
    return new Promise((resolve) => {
      resolve(null);
    });
  }
}
