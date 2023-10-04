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
        console.log(` Minimum age limit for tutors is 25 years`);
    }
    agelimit(age)
    {
        console.log(` Minimum age limit for Learners is ${this.age} years`);
    }
}
class learner extends tutor
{
    //learner and their corresponding teacher
    learner(lname)
    {
        console.log(`The corresponding tutor for learner ${this.lname} is ${this.name}`);
    }
}
let obj1=new tutor('smith','maths');
obj1.tutordetails();
obj1.agelimit();
obj1.agelimit(15);
let obj2= new learner;
obj2.learner('david');