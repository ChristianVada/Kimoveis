import { Router } from "express"
import { ensureBodyisValid } from "../middlewares"
import SchemaLogin from "../schemas/login.shemas"
import { loginUsersController } from "../controllers"

const loginRoutes: Router = Router()

loginRoutes.post("/", ensureBodyisValid(SchemaLogin), loginUsersController)

export default loginRoutes
