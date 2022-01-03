import express from 'express'
import usersRouter from './users'
import testRouter from './tests'
import gitHubRouter from './github'

const router = express.Router()

router.use('/users', usersRouter)
router.use('/tests', testRouter)
router.use('/github', gitHubRouter)

export default router
