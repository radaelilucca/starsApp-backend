import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'

const app = express()



mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

app.listen(3000)

export default app