import ensureBodyisValid from "./users/ensureBodyIsValid.middleware"
import ensureEmailNotExists from "./users/ensureEmailNotExists.middleware"
import ensureTokenIsValid from "./users/ensureTokenIsValid.middleware"
import ensureIsAdmin from "./users/ensureIsAdmin.middleware"
import ensureIdExists from "./users/ensureIdExists.middleware"
import ensureIsAdminOrSelf from "./users/ensureIsAdminOrSelf .middleware"

import ensureCategoryNotExists from "./categories/ensureCategoryNotExists.middleware"

import ensureAddressNotExists from "./realEstates/ensureAddressNotExists.middleware"

import ensureIdRealEstateExists from "./schedules/ensureIdRealEstateExists.middleware"
import ensureDateAndHourNotExists from "./schedules/ensureDateAndHourNotExists.middleware"
import ensureUserScheduleNotExits from "./schedules/ensureUserScheduleNotExits.middleware"
import ensureDataAndHourIsValid from "./schedules/ensureDateAndHourIsValid.middleware"

export {
  ensureEmailNotExists,
  ensureBodyisValid,
  ensureTokenIsValid,
  ensureIsAdmin,
  ensureIdExists,
  ensureIsAdminOrSelf,
  ensureCategoryNotExists,
  ensureAddressNotExists,
  ensureIdRealEstateExists,
  ensureDateAndHourNotExists,
  ensureUserScheduleNotExits,
  ensureDataAndHourIsValid,
}
