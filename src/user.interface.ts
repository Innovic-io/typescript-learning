export interface IUser {
    _id: string;
    isAdmin: boolean;
    firstName: string;
    lastName: string;
    email: String;
    createdAt?: Date;
    description?: string;
}

export const user1: IUser = {
    _id: 'userid',
    isAdmin: false,
    firstName: 'Vladimir',
    lastName: 'Kunarac',
    email: "vla@gmail.com",
};
