import { Router } from "express"
import {
  createUsersController,
  deleteUsersController,
  readAllUsersController,
  updateUsersController,
} from "../controllers"
import {
  ensureBodyisValid,
  ensureEmailNotExists,
  ensureTokenIsValid,
  ensureIsAdmin,
  ensureIdExists,
  ensureIsAdminOrSelf,
} from "../middlewares"
import { SchemaUsersReq, SchemaUserUpdate } from "../schemas/users.schemas"

const usersRoutes: Router = Router()

usersRoutes.post(
  "/",
  ensureBodyisValid(SchemaUsersReq),
  ensureEmailNotExists,
  createUsersController
)

usersRoutes.get("/", ensureTokenIsValid, ensureIsAdmin, readAllUsersController)

usersRoutes.patch(
  "/:id",
  ensureIdExists,
  ensureBodyisValid(SchemaUserUpdate),
  ensureTokenIsValid,
  ensureIsAdminOrSelf,
  updateUsersController
)

usersRoutes.delete(
  "/:id",
  ensureIdExists,
  ensureTokenIsValid,
  ensureIsAdmin,
  deleteUsersController
)

export default usersRoutes
