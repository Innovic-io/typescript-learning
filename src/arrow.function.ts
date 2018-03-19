import { Company } from './company.class';
import { user1 } from './user.interface';

const company1 = new Company()
  .addCompany({
    _id: 'id',
    name: 'Innovic',
    url: 'http//',
    createdAt: new Date(),
    description: 'TheBestOne',
  })
  .addCompany({
    _id: 'id1',
    name: 'In',
    url: 'http//in',
    createdAt: new Date(),
    description: 'None',
  });

//async function f(){}
const f = async () => {
  console.log(await company1.getCompanyUsers('id').catch((reject) => reject));
  company1.addUserById('id', user1);
  console.log(await company1.getCompanyUsers('id').catch((reject) => reject));
};

f();

