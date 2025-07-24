import {z} from "zod";

export const RankingSchema = z.object({
    usuario: z.string(),
    puntos: z.number(),
  })
export const UsuarioSchema = z.object({
    usuario: z.string(),
    puntos: z.number(),
  });