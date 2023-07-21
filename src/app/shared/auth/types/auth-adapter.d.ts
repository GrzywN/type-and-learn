export interface AuthAdapter {
  login(email: string, password: string): Promise<User | null>;

  register(email: string, password: string, username: string): Promise<User | null>;

  logout(): Promise<User | null>;
}
