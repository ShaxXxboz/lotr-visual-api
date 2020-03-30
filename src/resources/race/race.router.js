import { Router } from 'express'
import controllers from './race.controllers'

const router = Router()

router.route('/').get(controllers.getMany)
router.route('/:id').get(controllers.getOne)

export default router
