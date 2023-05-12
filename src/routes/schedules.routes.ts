import { Router } from "express"
import { createScheduleController } from "../controllers"
import {
  ensureBodyisValid,
  ensureDataAndHourIsValid,
  ensureDateAndHourNotExists,
  ensureIdRealEstateExists,
  ensureTokenIsValid,
  ensureUserScheduleNotExits,
} from "../middlewares"
import { SchemaScheduleReq } from "../schemas/schedules.schemas"

const schedulesRoutes: Router = Router()

schedulesRoutes.post(
  "",
  ensureTokenIsValid,
  ensureBodyisValid(SchemaScheduleReq),
  ensureDataAndHourIsValid,
  ensureIdRealEstateExists,
  ensureUserScheduleNotExits,
  ensureDateAndHourNotExists,
  createScheduleController
)

schedulesRoutes.get("/realEstate/:id")

export default schedulesRoutes
