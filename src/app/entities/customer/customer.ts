import { FirstName } from './fisrst-name'

export interface CustomerProps {
  firstName: FirstName
  lastName: string
  email: string
  emailActived: boolean
  password: string
  userType: Role
  createdAt: Date
  updatedAt?: Date | null
}

type Role = {
  COLABORATOR: string
  ADMIN: string
}

export class Customer {
  private props: CustomerProps

  constructor(props: CustomerProps) {
    this.props = props
  }

  public set firstName(value: FirstName) {
    this.props.firstName = value
  }

  public get fistName(): FirstName {
    return this.props.firstName
  }

  public set lastName(value: string) {
    this.props.lastName = value
  }

  public get lastName(): string {
    return this.props.lastName
  }

  public set email(value: string) {
    this.props.email = value
  }

  public get email(): string {
    return this.props.email
  }

  public set emailActived(value: boolean) {
    this.props.emailActived = value
  }

  public get emailActived(): boolean {
    return this.props.emailActived
  }

  public set password(value: string) {
    this.props.password = value
  }

  public get password(): string {
    return this.props.password
  }

  public set userType(value: Role) {
    this.props.userType = value
  }

  public get userType(): Role {
    return this.props.userType
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
