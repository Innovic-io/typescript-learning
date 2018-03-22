import { College } from './college.namespace.classes';

const s1 = new College.Student("Marko Markovic", 1, [College.chemistry, College.math]);

const physics: College.Exams = {
  subject: "physics",
  year: 1
};

s1.addExam(physics);

console.log(s1);

