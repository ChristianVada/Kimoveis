import { z } from "zod"
import { SchemaScheduleReq } from "../schemas/schedules.schemas"

type IScheduleReq = z.infer<typeof SchemaScheduleReq>

export { IScheduleReq }
