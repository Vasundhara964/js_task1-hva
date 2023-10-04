 class tutor
{
    constructor(name,subject)
    {
        this.name = name;
        this.subject = subject;
    }

    tutordetails()
    {
        console.log(`Tutor Name: ${this.name}`);
        console.log(`Tutor ${this.name} is specialized in ${this.subject}`);
    }
    agelimit()
    {
        console.log(`Minimum age limit for tutors is 25 years`);
    }
}
class learner extends tutor
{
  constructor(name,subject)
  {
    super(name,subject);


  }
    //learner and their corresponding teacher
    learner(lname)
    {
        console.log(`The corresponding tutor for learner ${lname} is ${this.name}`);
    }
    agelimit()
    {
        console.log( `Minimum age limit for Learners is 15 years`);
    }
}

let obj2= new learner('smith','maths');
obj2.tutordetails();
obj2.learner('david');
obj2.agelimit();
let obj1=new tutor();
obj1.agelimit();

  