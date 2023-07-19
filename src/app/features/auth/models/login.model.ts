import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().trim().email().toLowerCase(),
  password: z.string(),
});
