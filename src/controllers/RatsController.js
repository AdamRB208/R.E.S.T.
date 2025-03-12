import { Router } from "express"
import BaseController from "../utils/BaseController.js"
import { ratsService } from "../services/RatsService.js"

export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getRats)
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

}