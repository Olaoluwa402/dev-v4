// classes
const { log } = console;
//create a student class
// add the folowing blueprints using constructor class - firstName,lastNam, email, courses
// instantiate a new class from the Student class and save it to a student_1 variable
//log your result
// add a method that returns coures
// update the courses list using setter function

class Student {
  constructor(firstName, lastName, email, courses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.courses = courses && Array.isArray(courses) ? courses : [];
  }

  getCourses() {
    return this.courses;
  }

  set updateCourses(item) {
    if (Array.isArray(item)) {
      for (let course of item) {
        this.courses.push(course);
      }
    } else {
      this.courses.push(item);
    } 
  }
}

const student_1 = new Student("Daniel", "Jude", "jude@example.com", [
  "JS",
  "Python",
]); //class instantiation

const student_2 = new Student("Jame", "John", "john@example.com", [
  "HTML",
  "CSS",
]); //class instantiation

log(student_1, "student_1");

log(student_2, "student_2");

student_1.updateCourses = ["JAVA", "CSS"];

log(student_1.getCourses());
