import { Customer } from './customer'
import { FirstName } from './first-name'
import { LastName } from './last-name'
import { Email } from './email'
import { Role } from '@/app/use-cases/create-customer'

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
    }),
        //deve ser possível criar um novo cliente com o status ativo de email
        it('should be able to create a new customer with an active email status', () => {
            const customer = new Customer({
                firstName: new FirstName('Adam'),
                lastName: new LastName('Almeida'),
                emailActived: true,
                email: new Email('test@email.com'),
                password: '12345678',
            })
            expect(customer).toBeTruthy()
        }),
        //deve ser possível criar um novo cliente com a permissão de ADMIN
        it('should be able to create a new customer with an ADMIN role', () => {
            const customer = new Customer({
                firstName: new FirstName('Adam'),
                lastName: new LastName('Almeida'),
                emailActived: true,
                email: new Email('test@email.com'),
                password: '12345678',
                userType: Role.ADMIN,
            })
            expect(customer).toBeTruthy()
        })
})
