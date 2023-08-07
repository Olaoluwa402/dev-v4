
const {log} = console;

class Student {
   constructor (firstName, lastName, email, courses){

     this.firstName = firstName;
     this.lastName = lastName;
     this.email= email;
     this.courses= courses;

   }

   getCourses(){

    const courses = this.courses
    return courses;
   }
    set setCourse(newCourse){
        if(Array.isArray(newcourse)){
            for()
            
        }
   }
}

const student_1 = new Student ("Kelvin", "Okpara", "kelvin.okpara@itskill.com", ["Cyber-Security", "Javascripts"]);


log(student_1);

log(student_1.getCourses());

student_1.setCourse = "React"
student_1.setCourse = "Node.js"

log(student_1);