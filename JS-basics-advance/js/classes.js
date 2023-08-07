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

// write a parent class named Bird. Include the following fields -numLegs,numEyes,kindom, sound
//create a child class called eagles. Include the following fields - name, age
//let the eagle class extend the Bird class
//create two eagle object from the child class

class Bird {
  constructor(numLegs, numEyes, sound) {
    this.numLegs = numLegs;
    this.numEyes = numEyes;
    this.sound = sound;
  }

  static getSound() {
    return "get store";
  }
}

Bird.prototype.kingdom = "Animal";

log(Bird.getSound(), "getSound");

const bird = new Bird();

class Eagle extends Bird {
  constructor(numLegs, numEyes, sound, name, age) {
    super(numLegs, numEyes, sound);
    this.name = name;
    this.age = age;
  }
}

const eagle_1 = new Eagle(2, 2, () => "mian", "eagle_1", -1);
const eagle_2 = new Eagle(1, 2, () => "mian 2", "eagle_2", 10);

// log(eagle_1.sound(), "eagle_1");
// log(eagle_2, "eagle_2");

// for (let key in eagle_1) {
//   log(key);
// }

console.time("monitor_time");
if (eagle_1.age == 0) {
  console.warn("not a valid age");
} else if (eagle_1.age < 0) {
  console.error("not a valid age");
}
console.timeEnd("monitor_time");

console.table(eagle_1);

console.info("monitor_time");
console.clear();

console.assert(eagle_1.age > 0);
