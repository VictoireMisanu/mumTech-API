/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import { Route } from '@adonisjs/core/http'
// import { middleware } from './kernel.js'
import router from '@adonisjs/core/services/router'

const CoursesController = () => import('../app/controllers/courses_controller.js')
const ModulesController = () => import('../app/controllers/modules_controller.js')
const AuthController = () => import('../app/controllers/auth_controller.js')


router.get('/', [CoursesController, 'coursesList'])
router.get('/courses', [ModulesController, 'modulesList'])
router.post('/signin', [AuthController, 'authenticateUser'])
router.post('/signup', [AuthController, 'registerAccountInfo'])

