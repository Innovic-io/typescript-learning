export namespace College {


  export class Student {

    constructor(public fullName: string, public year: number, public exams: Exams[]) {
    }

    addExam(exam: Exams) {
      if (exam.year == this.year) {
        this.exams.push(exam);
      }
    }

  }

  export class Exams {

    constructor(public subject: string, public year: number) {
    }
  }

  export const math: Exams = {
    subject: "Maths",
    year: 1
  };
  export const chemistry: Exams = {
    subject: "Chemistry",
    year: 1
  };
}
