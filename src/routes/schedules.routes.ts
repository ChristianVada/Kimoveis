import { Router } from "express"
import {
  createScheduleController,
  readScheduleByRealEstateController,
} from "../controllers"
import {
  ensureBodyisValid,
  ensureDataAndHourIsValid,
  ensureDateAndHourNotExists,
  ensureIdByParamsExists,
  ensureIdRealEstateExists,
  ensureIsAdmin,
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

schedulesRoutes.get(
  "/realEstate/:id",
  ensureTokenIsValid,
  ensureIsAdmin,
  ensureIdByParamsExists,
  readScheduleByRealEstateController
)

export default schedulesRoutes
