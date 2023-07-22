import { z } from 'zod';

export const userCollectionSchema = z.object({
  collectionId: z.string(),
  collectionName: z.string(),
  created: z.string(),
  description: z.string(),
  id: z.string(),
  name: z.string(),
  updated: z.string(),
  user_id: z.string(),
});

export type UserCollection = z.infer<typeof userCollectionSchema>;

export const parseUserCollection = userCollectionSchema.parse;
