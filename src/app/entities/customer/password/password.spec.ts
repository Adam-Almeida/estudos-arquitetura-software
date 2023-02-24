import { Password } from '.'

describe('Customers password', () => {
    //deve ser possível criar um password válido
    it('should be able create valid password', () => {
        const password = new Password('pass1234')
        expect(password).toBeTruthy()
    })

    // não deve ser possível de criar um password de cliente com um número menor que 3 caracteres
    it('should not be able to create a customer password with less than 3 characters', () => {
        expect(() => new Password('Aa')).toThrow()
    })

    // não deve ser possível de criar um password de cliente com um número maior que 8 caracteres
    it('should not be able to create a customer password with more than 8 characters', () => {
        expect(() => new Password('A'.repeat(9))).toThrow()
    })

    // não deve ser possível de criar um password de cliente vazio
    it('should not be able to create a customer password with empty', () => {
        expect(() => new Password('')).toThrow()
    })
})