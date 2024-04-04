import { z } from "zod";

export const editSchema = z.object({
  title: z.string(),
  author: z.string(),
  description: z.string(),
  type: z.string(),
  cover: z.string(),
  launched_in: z.string(),
  status: z.string(),
  genres: z.string(),
});
