class Tutor {
    constructor(name, expertise) {
      this.name = name;
      this.expertise = expertise;
    }
  
    // Encapsulation: Using getters and setters to control access to private attributes
    getName() {
      return this.name;
    }
  
    getExpertise() {
      return this.expertise;
    }
  
    // Abstraction: Providing a high-level interface while hiding implementation details
    introduce() {
      console.log(`Hi, I'm ${this.name}, and I specialize in ${this.expertise}.`);
    }
  
    // Polymorphism: Implementing different behaviors for different types of tutors
    teach(course) {
      console.log(`${this.name} is teaching ${course.getName()} to students.`);
    }
  }
  class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  
    // Encapsulation: Using getters and setters to control access to private attributes
    getName() {
      return this.name;
    }
  
    getGrade() {
      return this.grade;
    }
  
    // Abstraction: Providing a high-level interface while hiding implementation details
    introduce() {
      console.log(`Hi, I'm ${this.name}, and I'm in grade ${this.grade}.`);
    }
  
    // Polymorphism: Implementing different behaviors for different types of students
    enroll(course) {
      console.log(`${this.name} is enrolled in the course: ${course.getName()}.`);
    }
  }
  
  class Course {
    constructor(name, tutor) {
      this.name = name;
      this.tutor = tutor;
    }
  
    // Encapsulation: Using getters to access private attributes
    getName() {
      return this.name;
    }
  
    // Abstraction: Providing a high-level interface while hiding implementation details
    start() {
      console.log(`The course ${this.name} has started.`);
    }
  
    end() {
      console.log(`The course ${this.name} has ended.`);
    }
  
    // Polymorphism: Using the tutor as an argument to teach the course
    teachCourse() {
      this.tutor.teach(this);
    }
  }
  
  // Usage example
  const mathTutor = new Tutor("Alice", "Mathematics");
  const historyTutor = new Tutor("Bob", "History");
  
  const student1 = new Student("Eva", 10);
  const student2 = new Student("Mike", 8);
  
  const mathCourse = new Course("Math101", mathTutor);
  const historyCourse = new Course("History101", historyTutor);
  
  mathTutor.introduce();
  student1.introduce();
  
  mathCourse.start();
  mathCourse.teachCourse();
  mathCourse.end();
  
  student1.enroll(mathCourse);
  
  historyTutor.introduce();
  student2.introduce();
  
  historyCourse.start();
  historyCourse.teachCourse();
  historyCourse.end();
  
  student2.enroll(historyCourse);
  