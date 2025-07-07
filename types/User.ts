import { UserType } from "@/enums/UserType.enum"

export interface User {
    id: string
    email: string
    isEmailVerified: boolean
    firstName: string
    lastName: string
    userType: UserType
    access_token: string
}

