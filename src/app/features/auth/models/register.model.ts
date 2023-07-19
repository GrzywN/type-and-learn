import { createRegExp, digit, letter, oneOrMore } from 'magic-regexp';
import { z } from 'zod';

const USERNAME_VALIDATION_MESSAGE = 'Name must be 3 or more characters long' as const;
const PASSWORD_VALIDATION_MESSAGE =
  'Password must contain at least 10 characters and be a combination of uppercase letters, lowercase letters and numbers.' as const;

const atLeastOneLowercase = createRegExp(oneOrMore(letter.lowercase));
const atLeastOneUppercase = createRegExp(oneOrMore(letter.uppercase));
const atLeastOneNumber = createRegExp(oneOrMore(digit));

export const registerSchema = z.object({
  username: z.string().trim().min(3, { message: USERNAME_VALIDATION_MESSAGE }),
  email: z.string().trim().email().toLowerCase(),
  password: z
    .string()
    .min(10, { message: PASSWORD_VALIDATION_MESSAGE })
    .regex(atLeastOneLowercase, { message: PASSWORD_VALIDATION_MESSAGE })
    .regex(atLeastOneUppercase, { message: PASSWORD_VALIDATION_MESSAGE })
    .regex(atLeastOneNumber, { message: PASSWORD_VALIDATION_MESSAGE }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
