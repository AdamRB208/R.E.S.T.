import { locationsService } from "../services/LocationsService.js";
import BaseController from "../utils/BaseController.js";


export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getLocations)
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

}