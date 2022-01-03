import express from 'express'
import fetch from 'node-fetch'

const router = express.Router()

router.get('/queries', (req: express.Request, res: express.Response) => {
  const queryParameters = req.query
  console.log('Query Parameters  :', queryParameters)
  res.status(200).json({ message: 'OK', queries: queryParameters })
})

router.get('/params/:testWord', (req: express.Request, res: express.Response) => {
  const params = req.params
  console.log('Query Parameters  :', params)
  console.log('Query Parameter test word  :', params.testWord)
  res.status(200).json({ message: 'OK', params: params })
})

router.get('/githubApi', (req: express.Request, res: express.Response) => {
  githubUsers()
    .then((githubUsersResult) => {
      res.status(200).json({ message: 'OK', githubUsersResult: githubUsersResult, userNum: githubUsersResult?.length })
    })
    .catch((error) => {
      console.error(error)
      res.status(400)
    })
})

const githubUsers = async (): Promise<[] | null> => {
  const response = await fetch('https://api.github.com' + '/users')
    .then((res) => {
      console.log('Response Success')
      return res
    })
    .catch((error) => {
      console.log(error)
      return null
    })
  if (response === null) {
    return null
  }

  const responseJson = await response
    .json()
    .then((json) => {
      console.log('Response Json ', json[0])
      return json
    })
    .catch((error) => {
      console.error(error)
      return null
    })
  console.log('TYPE OF: ', typeof responseJson)
  return responseJson
}

export default router
