import { Router, Request, Response } from 'express'
import { prisma } from '../prisma-service'

export const customer = Router()

customer.get('/customer', (request: Request, response: Response) => {
  const customers = prisma.customer.findMany()

  response.send({ message: 'Hello World', customers })
})
