import { Router } from "express"
import { ensureIsAdmin } from "../middlewares"

const categoriesRoutes: Router = Router()

categoriesRoutes.post("", ensureIsAdmin)

categoriesRoutes.get("")

categoriesRoutes.get("/:id/realEstate")

export default categoriesRoutes
