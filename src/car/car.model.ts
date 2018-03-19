export class Car {

  constructor(private model: string, private regTable: string, private engine: string, private weight: number) {
  }

  get() {

    return {
      model: this.model,
      regTable: this.regTable,
      engine: this.engine,
      weight: this.weight
    };
  }
}
