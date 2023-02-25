import { Customer } from './customer'
import { FirstName } from './first-name'
import { LastName } from './last-name'
import { Email } from './email'
import { Password } from './password'

describe('Customers', () => {
    //deve ser possível criar um novo cliente
    it('should be able to create customer', () => {
        const customer = new Customer({
            firstName: new FirstName('Adam'),
            lastName: new LastName('Almeida'),
            email: new Email('test@email.com'),
            password: new Password('12345678'),
        })
        expect(customer).toBeTruthy()
    }),
        //deve ser possível criar um novo cliente com o status ativo de email
        it('should be able to create a new customer with an active email status', () => {
            const customer = new Customer({
                firstName: new FirstName('Adam'),
                lastName: new LastName('Almeida'),
                emailActived: true,
                email: new Email('test@email.com'),
                password: new Password('12345678'),
            })
            expect(customer).toBeTruthy()
        }),
        //deve ser possível criar um novo cliente com o status padrão de email
        it('should be able to create a new customer with an default active email status', () => {
            const customer = new Customer({
                firstName: new FirstName('Adam'),
                lastName: new LastName('Almeida'),
                email: new Email('test@email.com'),
                password: new Password('12345678'),
            })
            expect(customer).toBeTruthy()
        })
})
