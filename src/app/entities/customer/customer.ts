import { Replace } from '@/helpers/Replace'
import { CustomerProps, UserTypeProps } from './customer-interface'
import { Email } from './email'
import { FirstName } from './first-name'
import { LastName } from './last-name'

export class Customer {
    private props: CustomerProps

    constructor(
        props: Replace<
            CustomerProps,
            { userType?: UserTypeProps, emailActived?: boolean; createdAt?: Date }
        >
    ) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
            emailActived: false,
            userType: UserTypeProps.COLLABORATOR
        }
    }

    public set firstName(value: FirstName) {
        this.props.firstName = value
    }

    public get fistName(): FirstName {
        return this.props.firstName
    }

    public set lastName(value: LastName) {
        this.props.lastName = value
    }

    public get lastName(): LastName {
        return this.props.lastName
    }

    public set email(value: Email) {
        this.props.email = value
    }

    public get email(): Email {
        return this.props.email
    }

    public set emailActived(value: boolean | undefined) {
        this.props.emailActived
    }

    public get emailActived(): boolean | undefined {
        return this.props.emailActived
    }

    public set password(value: string) {
        this.props.password = value
    }

    public get password(): string {
        return this.props.password
    }

    public set updatedAt(value: Date | null | undefined) {
        this.props.updatedAt = value
    }

    public get updatedAt(): Date | null | undefined {
        return this.props.updatedAt
    }

    public get createdAt(): Date {
        return this.props.createdAt
    }
}
