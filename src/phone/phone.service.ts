import { PhoneModel, phonesInStock } from './phone.model';

export class PhoneService {

  async toService(phone: PhoneModel): PhoneModel {

    if (Math.random() < 0.5) {
      throw new Error("Sorry, your phone cannot be fixed.");
    }

    return phone;
  }

  async inStock(name: string) {
    return phonesInStock.filter(value => value.name.toLowerCase() === name.toLowerCase())
  }

}
