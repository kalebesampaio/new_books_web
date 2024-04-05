import { z } from "zod";

export const newSchema = z.object({
  title: z.string().min(1, "Este campo é obrigatório."),
  author: z.string().min(1, "Este campo é obrigatório."),
  description: z.string().min(1, "Este campo é obrigatório."),
  type: z.string().min(1, "Este campo é obrigatório."),
  cover: z.string().min(1, "Este campo é obrigatório."),
  launched_in: z.string().min(1, "Este campo é obrigatório."),
  status: z.string().min(1, "Este campo é obrigatório."),
  genres: z.string().min(1, "Este campo é obrigatório."),
});
