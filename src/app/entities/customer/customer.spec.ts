import { Customer, Role } from './customer'
import { FirstName } from './fisrst-name'

describe('Customers', () => {
  it('should be able to create customer', () => {
    const customer = new Customer({
      firstName: new FirstName('Adam'),
      lastName: 'Almeida',
      email: 'test@email.com',
      emailActived: false,
      password: '12345678',
      userType: Role.COLABORATOR,
    })
    expect(customer).toBeTruthy()
  })
})
