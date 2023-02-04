export class LastName {
    private readonly lastName: string

    get value(): string {
        return this.lastName
    }

    private validateLastNameLength(lastName: string): boolean {
        return lastName.length >= 3 && lastName.length <= 240
    }

    constructor(lastName: string) {
        const isLastNameValid = this.validateLastNameLength(lastName)

        if (!isLastNameValid) {
            throw new Error('Last name lenght error.')
        }

        this.lastName = lastName
    }
}
