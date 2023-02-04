import { CreateCustomer } from '@/app/use-cases/create-customer'
import { Router, Request, Response } from 'express'
import { prisma } from '../prisma-service'

export const customer = Router()

customer.post('/customer', async (request: Request, response: Response) => {
    const { firstName, lastName, email, password, userType } = request.body

    const createCustomerUseCase = new CreateCustomer()

    const customer = await createCustomerUseCase.execute({
        firstName,
        lastName,
        email,
        password,
        userType,
    })

    response.json(customer)
})

customer.get('/customer', (request: Request, response: Response) => {
    const customers = prisma.customer.findMany()

    response.send({ message: 'Hello World', customers })
})
