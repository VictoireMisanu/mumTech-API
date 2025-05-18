import type { HttpContext } from '@adonisjs/core/http'
import Course from '#models/course'

export default class ProductsController {
  public async coursesList(ctx: HttpContext) {
    try {
      const products = await Course.all()
      return ctx.response.status(200).json(products)
    } catch (error) {
      return ctx.response.status(500).json({
        message: 'Erreur lors de la récupération des cours',
        error: error.message,
      })
    }
  }

  public async productDetail(ctx: HttpContext) {
    try {
      const product = await Course.find(ctx.params.id)
      return ctx.response.status(200).json(product)
    } catch (error) {
      return ctx.response.status(500).json({
        message: 'Erreur lors de la récupération du produit',
        error: error.message,
      })
    }
  }
}
