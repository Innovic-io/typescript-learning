import { CarFactory } from './car.factory';
import { equal } from "assert";

const carFactory = new CarFactory();
const car = carFactory.makeCar("Audi", "123-456", "Diesel", 1.9);

equal("Audi", car.get().model);
