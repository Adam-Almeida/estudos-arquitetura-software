export class Password {
    private readonly password: string

    get value(): string {
        return this.password
    }

    private validatePasswordLength(password: string): boolean {
        return password.length >= 3 && password.length <= 8
    }

    constructor(password: string) {
        const isValidLengthPassword = this.validatePasswordLength(password)

        if (!isValidLengthPassword) {
            throw new Error('Password is invalid')
        }

        this.password = password
    }
}