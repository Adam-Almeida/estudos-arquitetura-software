import { Email } from './email'
import { FirstName } from './first-name'
import { LastName } from './last-name'

export enum UserTypeProps {
    ADMIN,
    COLLABORATOR
}

export interface CustomerProps {
    firstName: FirstName
    lastName: LastName
    email: Email
    emailActived?: boolean
    password: string
    userType?: UserTypeProps
    createdAt: Date
    updatedAt?: Date | null
}
