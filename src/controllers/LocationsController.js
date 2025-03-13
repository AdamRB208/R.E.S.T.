import { dbContext } from "../db/DbContext.js";
import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";


export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getLocations)
      .get('/:locationId/missions', this.getMissionByLocationId)
  }

  /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */

  async getLocations(request, response, next) {
    try {
      const location = await locationsService.getLocations()
      response.send(location)
    } catch (error) {
      next(error)
    }
  }

  /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */


  async getMissionByLocationId(request, response, next) {
    try {
      const locationId = request.params.locationId
      const missions = await missionsService.getMissionByLocationId(locationId)
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }

}

