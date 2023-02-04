export class Email {
    private readonly email: string

    get value() {
        return this.email
    }

    private validateEmailValidRegex(email: string): boolean {
        const regexEmail =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        return regexEmail.test(email)
    }

    constructor(email: string) {
        const isEmailValid = this.validateEmailValidRegex(email)

        if (!isEmailValid) {
            throw new Error('Email is not valid')
        }
        
        this.email = email
    }
}
