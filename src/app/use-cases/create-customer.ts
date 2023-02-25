import { Customer } from '../entities/customer/customer'
import { Email } from '../entities/customer/email'
import { FirstName } from '../entities/customer/first-name'
import { LastName } from '../entities/customer/last-name'
import { Password } from '../entities/customer/password'

interface CreateCustomerRequest {
    firstName: string
    lastName: string
    email: string
    password: string
}

interface CreateCustomerResponse {
    customer: Customer
}

export class CreateCustomer {
    async execute(request: CreateCustomerRequest): Promise<CreateCustomerResponse> {
        const { firstName, lastName, email, password} = request

        const customer = new Customer({
            firstName: new FirstName(firstName),
            lastName: new LastName(lastName),
            email: new Email(email),
            password: new Password(password)
        })

        return {
            customer,
        }
    }
}
