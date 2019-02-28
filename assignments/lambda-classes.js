// CODE here for your Lambda Classes

class Person {
    constructor(base) {
        this.name = base.name;
        this.age = base.age;
        this.location = base.location;
        this.gender = base.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


class Instructor extends Person {
    constructor(atts) {
        super(atts);
        this.specialty = atts.specialty;
        this.favLanguage = atts.favLanguage;
        this. catchPhrase = atts.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    addOrSub(student){
        let previous = student.grade;
        let minGrade = 1;
        let maxGrade = 100 - student.grade;
        let random = Math.round((Math.random() - 0.5) * (maxGrade - minGrade) + minGrade);
        let final = `${this.name} set ${student.name}'s grade to ${student.grade + random} with a difference of ${random}, ${student.name} had a previous grade of ${previous}`
        student.grade = student.grade + random
        return final
    }
    }


class Student extends Person {
    constructor(atts) {
        super(atts);
        this.previousBackground = atts.previousBackground;
        this.className = atts.className;
        this.favSubjects = atts.favSubjects;
        this.grade = atts.grade;
    }
    listSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} had submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun spring challenge on ${subject}`);
    }
    graduate() {
        if(this.grade >= 70) {
            console.log(`${this.name} has just graduated from ${this.className} with a grade of ${this.grade}!`)
        }else{
            console.log(`Sorry ${this.name}, but you need to study some more!`)
        }
    }
}


class ProjectManager extends Instructor {
    constructor(atts){
        super(atts);
        this.gradClassName = atts.gradClassName;
        this.favInstructor = atts.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
    
}



const josh = new Instructor({
    name: 'Josh',
    location: 'Lambda',
    age: 32,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Everything',
    catchPhrase: '30 minute break'
});

const ali = new Instructor({
    name: 'Ali',
    location: 'Somewhere',
    age: 50,
    gender: 'male',
    favLanguage: 'Nonsense',
    specialty: 'Nothing',
    catchPhrase: 'Ouch'
});



const ap = new Student({
    name: 'Ap',
    age: 23,
    location: 'USA',
    gender: 'Male',
    previousBackground: 'Java',
    className: 'WEB18',
    grade: 50,
    favSubjects: [
    'Java', 
    'CSS', 
    'HTML', 
    'Javascript',
    ],
});


const kitten = new Student({
    name: 'Kitty',
    age: 2,
    location: 'A house',
    gender: 'female',
    previousBackground: 'Balls of string',
    className: 'fluffy18',
    grade: 40,
    favSubjects: [
    'Food',
    'string',
    'Yarn',
    'fish',
    ],
});


const ben = new ProjectManager({
    name: 'Ben',
    location: 'Lambda',
    age: 23,
    gender: 'male',
    favLanguage: 'IDK',
    specialty: 'Memes',
    catchPhrase: 'Standup time',
    gradClassName: 'WEB15',
    favInstructor: 'Josh'
});

const ramenNoodle = new ProjectManager({
    name: 'Ramen',
    location: 'Cup',
    age: 1,
    gender: 'Noodle',
    favLanguage: 'Slurp',
    specialty: 'Burning your tongue',
    catchPhrase: 'tssssssss',
    gradClassName: 'Microwave',
    favInstructor: 'Me'
});


//Instructors
josh.speak();
josh.demo('HTML');
josh.grade(ap, 'Javascript');
console.log(josh.specialty);
console.log(josh.favLanguage);
console.log(josh.catchPhrase);

ali.speak();
ali.demo('CSS');
ali.grade(kitten, 'Yarn');
console.log(ali.specialty);
console.log(ali.favLanguage);
console.log(ali.catchPhrase);



//Students
ap.speak();
ap.sprintChallenge('Javascript');
ap.PRAssignment('JavaScript Sprint');
ap.listSubjects();
console.log(ap.previousBackground);
console.log(ap.className);
console.log(ap.age);


kitten.speak();
kitten.sprintChallenge('Eating');
kitten.PRAssignment('Yarn');
kitten.listSubjects();
console.log(kitten.previousBackground);
console.log(kitten.className);
console.log(kitten.age);




//Project Managers
ben.speak();
ben.demo('Memes');
ben.grade(kitten, 'Food');
ben.standUp('Web18');
ben.debugsCode(ap, "Java");
console.log(ben.specialty);
console.log(ben.catchPhrase);
console.log(ben.favLanguage);
console.log(ben.favInstructor);
console.log(ben.gradClassName);


ramenNoodle.speak();
ramenNoodle.demo('Hot water');
ramenNoodle.grade(ap, 'tongue burning');
ramenNoodle.standUp('Food');
ramenNoodle.debugsCode(ap, "Ice cubes");
console.log(ramenNoodle.specialty);
console.log(ramenNoodle.catchPhrase);
console.log(ramenNoodle.favLanguage);
console.log(ramenNoodle.favInstructor);
console.log(ramenNoodle.gradClassName);


//Stretch methods
console.log(josh.addOrSub(ap));
console.log(ap.grade)
ap.graduate()
console.log(josh.addOrSub(kitten))
console.log(kitten.grade)
kitten.graduate()