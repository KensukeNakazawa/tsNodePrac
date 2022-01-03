import express from 'express'

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
  try {
    console.log(req.params)
    res.status(200).json({ userId: 'U001', userName: 'Knesuke Nakazawa' })
  } finally {
    console.log('DONE')
  }
})

router.post('/', (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json({ message: '登録しました' })
  } finally {
    console.log('DONE')
  }
})

export default router
