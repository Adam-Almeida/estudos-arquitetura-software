import { CreateCustomerController } from '@/app/controllers/create-customer-controller'
import { Router, Request, Response } from 'express'
import { prisma } from '../prisma-service'

export const customer = Router()

customer.post('/customer', (request: Request) => {
    CreateCustomerController(request.body)
})

customer.get('/customer', (request: Request, response: Response) => {
    const customers = prisma.customer.findMany()

    response.send({ message: 'Hello World', customers })
})
