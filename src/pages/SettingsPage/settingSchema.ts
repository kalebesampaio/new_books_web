import { z } from "zod";

export const settingSchema = z.object({
  name: z.string(),
  email: z.string(),
  birthday: z.string(),
  password: z.string(),
});
