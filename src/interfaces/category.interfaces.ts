import { z } from "zod"
import {
  SchemaCategoryReq,
  SchemaCategoryRes,
} from "../schemas/category.schemas"

type ICategoryReq = z.infer<typeof SchemaCategoryReq>

type ICategoryRes = z.infer<typeof SchemaCategoryRes>

export { ICategoryReq, ICategoryRes }
