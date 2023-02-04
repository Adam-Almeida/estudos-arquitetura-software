export class FirstName {
    private readonly firstName: string

    get value(): string {
        return this.firstName
    }

    private validateFirstNameLength(firstName: string): boolean {
        return firstName.length >= 3 && firstName.length <= 50
    }

    constructor(firstName: string) {
        const isFirstNameValid = this.validateFirstNameLength(firstName)

        if (!isFirstNameValid) {
            throw new Error('First name lenght error.')
        }

        this.firstName = firstName
    }
}
