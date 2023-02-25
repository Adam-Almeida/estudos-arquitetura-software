import { CreateCustomer } from "../use-cases/create-customer"

interface RequestProps {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export async function CreateCustomerController(request: RequestProps) {
    const { firstName, lastName, email, password } = request

    const createCustomerUseCase = new CreateCustomer()

    const customer = await createCustomerUseCase.execute({
        firstName,
        lastName,
        email,
        password
    })

    return { customer }
}