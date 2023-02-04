import { LastName } from '.'

describe('Customers last name', () => {
    
    // deve ser possível de criar um sobrenome de cliente
    it('should be able to create a customer last name', () => {
        const firstName = new LastName('Almeida')
        expect(firstName).toBeTruthy()
    })

    // não deve ser possível de criar um sobrenome de cliente com um número menor que 3 caracteres
    it('should not be able to create a customer last name with less than 3 characters', () => {
        expect(() => new LastName('Aa')).toThrow()
    })

    // não deve ser possível de criar um sobrenome de cliente com um número maior que 240 caracteres
    it('should not be able to create a customer last name with more than 50 characters', () => {
        expect(() => new LastName('A'.repeat(241))).toThrow()
    })
})
