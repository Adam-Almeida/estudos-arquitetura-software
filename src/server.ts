import express, { Request, Response } from 'express'
import { customer } from './infra/routes/customer-routes'

const port = process.env.PORT || 3333
const app = express()

app.use(express.json())
app.use(customer)

app.get('/ping', (req: Request, res: Response) => {
  res.json({ pong: true })
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
