import express from 'express'

import githubController from '../../controllers/githubController'

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
  githubController
    .getUsers()
    .then((githubUsers) => {
      res.status(200).json({
        message: 'ok',
        userNum: githubUsers?.length,
        githubUsers: githubUsers,
      })
    })
    .catch((error) => {
      console.error(error)
      res.status(400).json({ message: 'request failed, see log' })
    })
})

router.get('/:userName', (req: express.Request, res: express.Response) => {
  const userName = req.params.userName
  console.log(req.params.userName)
  res.status(200).json({
    message: 'ok',
    'Github User Name': userName,
  })
})

export default router
