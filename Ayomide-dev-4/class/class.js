//  classes

// create a students class

class Student {
  constructor(firstName, lastName, email, age, courses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.courses = [];
  }

  getcourse() {
    const meCourses = this.courses;
    return meCourses;
  }

  set setCourses(courses) {
    this.courses.push(courses);
  }
}

const students1 = new Student(
  "Ayo",
  "Smith",
  "debs.smith@gmail",
  20,
  "pol science"
);

// const students2 = new Student(
//   "Bibi",
//   "Williams",
//   "bib@gmail.com",
//   23,
//   "English"
// );

// const students3 = new Student("Dami", "Dam", "Dami@gmail.com", "15");
students1.setCourses = "Java";

console.log(students1);

console.log(students1.getcourse());

class Bird {
  constructor(numLegs, numEyes, kindom, sound) {
    this.numLegs = numLegs;
    this.numEyes = numEyes;
    this.kindom = kindom;
    this.sound = sound;
  }
}

const bird = new Bird("4", "2", "reptile", function(){return "sound"});
console.log(bird);

class Eagles extends Bird{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

const eagle = new Eagles("shalipopi", "23");
console.log(eagle);

