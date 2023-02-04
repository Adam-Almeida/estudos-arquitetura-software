import { Email } from './email'
import { FirstName } from './first-name'
import { LastName } from './last-name'

export interface CustomerProps {
    firstName: FirstName
    lastName: LastName
    email: Email
    emailActived?: boolean | null
    password: string
    userType: Role
    createdAt: Date
    updatedAt?: Date | null
}

export enum Role {
    COLABORATOR,
    ADMIN,
}
