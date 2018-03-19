export class PhoneModel {

  constructor(public brand: string, public name: string, public platform: string, public price: number) {
  }
}

export const phoneExample: PhoneModel = {
  brand: "Samsung",
  name: "S6",
  platform: "Android",
  price: 700
};
export const phonesInStock: PhoneModel[] = [
  {brand: "iPhone", name: "7", platform: "iOS", price: 1000},
  {brand: "HTC", name: "630", platform: "Android", price: 300},
  {brand: "Sony", name: "Xperia Z3", platform: "Android", price: 500},
  {brand: "HUAWEI", name: "Mate 10", platform: "Android", price: 900},
  {brand: "iPhone", name: "8 plus", platform: "iOS", price: 1500},
  {brand: "XIAOMI", name: "A1", platform: "Android", price: 150},
];
