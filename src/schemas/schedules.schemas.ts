import { z } from "zod"

const SchemaScheduleReq = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int(),
})

export { SchemaScheduleReq }
