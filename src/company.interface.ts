import { IUser } from "./user.interface";

export interface ICompany{
_id: string;
name: string;
url: string;
createdAt?: Date;
description?: string;
users?: IUser[];

}

const company: ICompany = {
    _id: 'id',
    name: 'Innovic',
    url: 'http//',
    createdAt: new Date(),
    description: 'TheBestOne',
    
};
const fName = 'Ivana';
const lName = 'Fustar';
let fullName= 'Full name = ' + fName + ' ' + lName;



