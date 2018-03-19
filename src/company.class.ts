import { IUser } from "./user.interface";
import { ICompany } from "./company.interface";
import { resolve } from "url";

export class Company{
    private company: ICompany[] = [] ;

    /**
     *
     */
    constructor(){   }
    addCompany(comp: ICompany) {
        this.company.push(comp);
        return this;
    }

    getCompany(){
        return this.company;
    }

    getById(id: string){
      return this.company.find(value => value._id === id)

    }
    deleteById(id: string){
        return this.company.filter(value => value._id!==id)
    }

    addUserById(id: string, user: IUser){
        const result = this.company.find(value => value._id === id);
        (!result.users) ? result.users = [user] : result.users.push(user);
        return this.company;
    }

    getCompanyUsers(id: string){
        const result = this.company.find(value => value._id === id).users;
        return new Promise((resolve, reject)=>{
            if(!result) {
               return reject('no users')
            }
            return resolve(result);
        })
        /**/
    }
}