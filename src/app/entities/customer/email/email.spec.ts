import { Email } from '.'

const invalidEMails = [
    '@test.com',
    '#@test.',
    'email',
    'emailteste@teste.',
    'test.test.com',
    'email@',
    '@example.com',
    'email@.com',
    'email@.com.',
    'email@com.',
    'em@ail.',
    'email@.',
    'e@.',
]

describe('Customers email', () => {
    // deve ser possível criar um email de cliente
    it('should be able to create a customer email', () => {
        const email = new Email('emailteste@teste.com')
        expect(email).toBeTruthy()
    })

    // não deve ser possível criar um email de cliente inválido
    it('should not be able to create a customer invalid email', () => {
        invalidEMails.map((email) => {
            expect(() => new Email(email)).toThrow()
        })
    })
})
