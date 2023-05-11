import { Router } from "express"
import {
  ensureBodyisValid,
  ensureCategoryNotExists,
  ensureIsAdmin,
  ensureTokenIsValid,
} from "../middlewares"
import { SchemaCategoryReq } from "../schemas/category.schemas"
import {
  createCategoryController,
  readCategoryController,
  readEstateByCategoryIdController,
} from "../controllers"

const categoriesRoutes: Router = Router()

categoriesRoutes.post(
  "",
  ensureTokenIsValid,
  ensureIsAdmin,
  ensureBodyisValid(SchemaCategoryReq),
  ensureCategoryNotExists,
  createCategoryController
)

categoriesRoutes.get("", readCategoryController)

categoriesRoutes.get("/:id/realEstate", readEstateByCategoryIdController)

export default categoriesRoutes
