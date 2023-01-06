import { LastName } from './last-name'

describe('Customers last name', () => {
  it('should be able to create a customer last name', () => {
    const firstName = new LastName('Almeida')
    expect(firstName).toBeTruthy()
  })

  it('should not be able to create a customer last name with less than 3 characters', () => {
    expect(() => new LastName('Aa')).toThrow()
  })

  it('should not be able to create a customer last name with more than 50 characters', () => {
    expect(() => new LastName('A'.repeat(241))).toThrow()
  })
})
