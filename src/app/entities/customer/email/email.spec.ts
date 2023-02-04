import { Email } from '.'

describe('Customers email', () => {
    
    // deve ser possível de criar um email de cliente
    it('should be able to create a customer email', () => {
        const email = new Email('emailteste@teste.com')
        expect(email).toBeTruthy()
    })

    // não deve ser possível de criar um primeiro nome de cliente com um número menor que 3 caracteres
    // it('should not be able to create a customer first name with less than 3 characters', () => {
    //     expect(() => new FirstName('Aa')).toThrow()
    // })

    // não deve ser possível de criar um primeiro nome de cliente com um número maior que 240 caracteres
    // it('should not be able to create a customer first name with more than 50 characters', () => {
    //     expect(() => new FirstName('A'.repeat(51))).toThrow()
    // })
})
