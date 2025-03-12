import { missionsService } from "../services/MissionsService.js"
import BaseController from "../utils/BaseController.js"


export class MissionsController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getMissions)

  }

  /**
      * @param {import("express").Request} request
      * @param {import("express").Response} response
      * @param {import("express").NextFunction} next
      */

  async getMissions(request, response, next) {
    try {
      const mission = await missionsService.getMissions()
      response.send(mission)
    } catch (error) {
      next(error)
    }
  }

}