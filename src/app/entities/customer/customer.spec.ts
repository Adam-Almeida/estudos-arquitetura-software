import { Customer, Role } from './customer'
import { FirstName } from './fisrst-name'
import { LastName } from './last-name'

describe('Customers', () => {
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
