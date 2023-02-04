import { Customer } from './customer'
import { FirstName } from './first-name'
import { LastName } from './last-name'
import { Email } from './email'

describe('Customers', () => {
    //deve ser possível criar um novo cliente
    it('should be able to create customer', () => {
        const customer = new Customer({
            firstName: new FirstName('Adam'),
            lastName: new LastName('Almeida'),
            email: new Email('test@email.com'),
            password: '12345678',
        })
        expect(customer).toBeTruthy()
    })
})
