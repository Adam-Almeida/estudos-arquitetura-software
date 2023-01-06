import { FirstName } from './fisrst-name'

test('it should be able to create a customer first name', () => {
  const firstName = new FirstName('Adam Almeida')
  expect(firstName).toBeTruthy()
})

test('it should not be able to create a customer first name with less than 3 characters', () => {
  expect(() => new FirstName('Aa')).toThrow()
})

test('it should not be able to create a customer first name with more than 50 characters', () => {
    expect(() => new FirstName('A'.repeat(51))).toThrow()
  })
