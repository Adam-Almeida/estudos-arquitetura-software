import { CreateCustomer } from './create-customer'

describe('Create Customer Use Case', () => {
    it('should be able new customer', async () => {
        const createCustomer = new CreateCustomer()

        const { customer } = await createCustomer.execute({
            firstName: 'Bruce',
            lastName: 'Wayne',
            email: 'bruce@waynecorporation.com',
            password: 'password'
        })

        expect(customer).toBeTruthy()
    })
})
