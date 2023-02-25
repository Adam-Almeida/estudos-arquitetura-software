import { Email } from './email'
import { FirstName } from './first-name'
import { LastName } from './last-name'
import { Password } from './password'

export enum UserTypeProps {
    ADMIN,
    COLLABORATOR
}

export interface CustomerProps {
    firstName: FirstName
    lastName: LastName
    email: Email
    emailActived?: boolean
    password: Password
    userType?: UserTypeProps
    createdAt: Date
    updatedAt?: Date | null
}
