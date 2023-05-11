import { number, string, z } from "zod"

const SchemaCategoryReq = z.object({
  name: string().max(45),
})

const SchemaCategoryRes = z.object({
  id: number(),
  name: string(),
})

export { SchemaCategoryReq, SchemaCategoryRes }
