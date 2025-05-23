import type { HttpContext } from '@adonisjs/core/http'
import Module from '#models/module'

export default class ModuleController {
  public async modulesList(ctx: HttpContext) {
    try {
      const farms = await Module.all()
      return ctx.response.status(200).json(farms)
    } catch (error) {
      return ctx.response.status(500).json({
        message: "Erreur lors de la recuperation des modules",
        error: error.message,
      })
    }
  }
}
