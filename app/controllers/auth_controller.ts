import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import { createAccountValidator, loginValidator } from '../validators/auth.js'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  async registerAccountInfo({ request, response }: HttpContext) {
    try {
      console.log(request.body()?.user_picture)

      const { user_name, user_firstname, user_email, user_password } =
        await request.validateUsing(createAccountValidator)
 
      await User.create({
       
        user_name,
        user_firstname,
        user_email,
        user_password,
      
      })

      return response.status(201).json({
        userInfo: { user_name, user_firstname, user_email, user_password },
      })
    } catch (error) {
      console.log(error)
      return response.status(500).json({
        message: "Une erreur est survenue lors de la création de l'utilisateur.",
        error: error.message,
      })
    }
  }

  async authenticateUser({ request, response }: HttpContext) {
    try {
      const { email, password } = await request.validateUsing(loginValidator)
      console.log(email, password)
      const user = await User.findBy('user_email', email)
      if (!user) {
        return response.status(401).json({ message: 'Identifiants invalides' })
      }
      const passwordValid = await hash.verify(user.user_password, password)
      console.log(user.user_password)
      if (!passwordValid) {
        return response.status(401).json({ message: 'Identifiants invalides' })
      }

      const token = await User.accessTokens.create(user)
      return response.status(200).json({
        token,
        userInfo: {
          user_id : user.id,
          user_name: user.user_name,
          user_firstname: user.user_firstname,
          user_email: user.user_email,
          
        },
      })
    } catch (error) {
      console.error(error)
      return response.status(500).json({
        message: "Une erreur est survenue lors de l'authentification.",
        error: error.message,
      })
    }
  }
  // async logout({ auth, response }: HttpContext) {
  //   try {
  //     await auth.use('api').logout()
  //     return response.status(200).json({ message: 'Déconnexion réussie' })
  //   } catch (error) {
  //     console.error(error)
  //     return response.status(500).json({
  //       message: "Une erreur est survenue lors de la déconnexion.",
  //       error: error.message,
  //     })
  //   }
  // }
}
