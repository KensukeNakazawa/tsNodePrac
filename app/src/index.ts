import express from 'express'
import router from './routes/v1/index'

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/v1', router)

const port = process.env.PORT || 3000

app.listen(port)
console.log('Express WebApi listening on port ' + port)
