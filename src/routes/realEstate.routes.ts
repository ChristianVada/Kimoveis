import { Router } from "express"
import {
  createRealEstateController,
  readRealEstateController,
} from "../controllers"
import {
  ensureAddressNotExists,
  ensureBodyisValid,
  ensureIsAdmin,
  ensureTokenIsValid,
} from "../middlewares"
import { SchemaRealEstateReq } from "../schemas/realEstate.schemas"

const realEstateRoutes: Router = Router()

realEstateRoutes.post(
  "",
  ensureBodyisValid(SchemaRealEstateReq),
  ensureTokenIsValid,
  ensureIsAdmin,
  ensureAddressNotExists,
  createRealEstateController
)

realEstateRoutes.get("", readRealEstateController)

export default realEstateRoutes
