import { Role } from './customer-interface'
import { Customer } from './customer'
import { FirstName } from './first-name'
import { LastName } from './last-name'

describe('Customers', () => {
    //deve ser possível criar um novo cliente
    it('should be able to create customer', () => {
        const customer = new Customer({
            firstName: new FirstName('Adam'),
            lastName: new LastName('Almeida'),
            email: 'test@email.com',
            emailActived: false,
            password: '12345678',
            userType: Role.COLABORATOR,
        })
        expect(customer).toBeTruthy()
    })
})
