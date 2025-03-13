import { Router } from "express"
import BaseController from "../utils/BaseController.js"
import { ratsService } from "../services/RatsService.js"
import { missionsService } from "../services/MissionsService.js"

export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getRats)
      .get('/:ratId/missions', this.getMissionByRatId)
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */

  async getRats(request, response, next) {
    try {
      const rats = await ratsService.getRats()
      response.send(rats)
    } catch (error) {
      next(error)
    }
  }

  async getMissionByRatId(request, response, next) {
    try {
      const ratId = request.params.ratId
      const missions = await missionsService.getMissionByRatId(ratId)
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }


}