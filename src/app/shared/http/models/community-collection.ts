import { z } from 'zod';

export const communityCollectionSchema = z.object({
  collectionId: z.string(),
  collectionName: z.string(),
  created: z.string(),
  description: z.string(),
  id: z.string(),
  name: z.string(),
  updated: z.string(),
  user_id: z.string(),
});

export type CommunityCollection = z.infer<typeof communityCollectionSchema>;

export const parseCommunityCollection = communityCollectionSchema.parse;
