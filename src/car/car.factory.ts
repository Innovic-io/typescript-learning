import { Car } from './car.model'

export class CarFactory {

  makeCar(model: string, regTable: string, engine: string, weight: number) {

    return new Car(model, regTable, engine, weight);
  }
}
