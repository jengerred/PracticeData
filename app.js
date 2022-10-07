/*
Suppose that you're working in a small town administration, 
and you're in charge of two town elements:
1. Schools
2. Classrooms
It's a very small town, so right now there are only 3 schools and 6 classrooms. 
        (yes there are only 2 classrooms per school. lol)
All schools and classrooms have a name and number of students.
At an end-of-year meeting, your boss wants a final report with the following:
1. Student-teacher ratio, and names of each school in the town.
2. Average age of each school's students (formula: sum of all ages/number of students.)
3. The name of the school that has more than 40 students
4. Total student/teacher ratio of the town's classrooms.
5. Grade classification of all classrooms: grade level. 
6. Name of the classroom teacher. 

All the report data should be printed to the console.
*/

class Element {
    constructor(name, numOfStudents) {
        this.name = name;
        this.numOfStudents = numOfStudents;
    }
}

class School extends Element {
    constructor(name, numOfStudents, ageOfStudents, numOfClassrooms) {
        super(name, numOfStudents)
        //this.numOfStudents = numOfStudents
        this.ageOfStudents = ageOfStudents;
        this.numOfClassrooms = numOfClassrooms;
        
    }

    schoolDensity() {
        const density = this.numOfStudents / this.numOfClassrooms;
        console.log(`${this.name} has a student/teacher ratio of ${density} students per classroom and an average age of ${this.ageOfStudents} years old.`)
    }
    

}

class Classroom extends Element {
    constructor(name, numOfStudents, ageOfStudent, grade) {
        super(name, numOfStudents)
        this.ageOfStudent = ageOfStudent;
        this.grade = grade
        
    }
   

    classifyClassrooms() {
        const classification = new Map();
        classification.set(0, 'Kindergarten');
        classification.set(1, '1st grade');
        classification.set(2, '2nd grade');
        classification.set(3, '3rd grade');
        classification.set(4, '4th grade');
        classification.set(5, '5th grade');
        console.log(`${this.name}, has ${this.numOfStudents} students in their ${classification.get(this.grade)} classroom`)
    }
   
}

const allSchools = [
    new School('Grand Rapids Elementary', 43, 5.5, 2),
    new School('Main Elementary', 46, 7.5, 2),
    new School('Christian Elementary', 51, 9.5, 2)
]

const allClassrooms = [
    new Classroom('Mr.B', 20, 5, 0),
    new Classroom('Mrs.Hartman', 23, 6, 1),
    new Classroom('Mrs.Rengburg', 26, 7, 2),
    new Classroom('Mrs.Herman', 20, 8, 3),
    new Classroom('Mrs.Sheldon', 24, 9, 4),
    new Classroom('Mrs.Wimbush', 27, 10, 5)
]

//total number of students
    const sum = allSchools.reduce((accumulator, object) => {
    return accumulator + object.numOfStudents;}, 0);

//total number of classrooms
    const classSum = allSchools.reduce((accumulator, object) => {
        return accumulator + object.numOfClassrooms;
    } ,0);

    //student teacher ratio total
    const ratio = sum/classSum;



function reportSchools(p) {
    console.log('%c ------- Grand Rapids Schools Report -------', 'background: #222; color: #bada55');

    //density
    p.forEach(el => el.schoolDensity());
    
    
    console.log(`Our ${p.length} schools have an average of ${ratio}  students per classroom.`)

    //which school has more than 40 students
    const i = p.map(el => el.numOfStudents).findIndex(el => el >= 40)
    console.log(`${p[i].name} has more than 40 students.`)

}

function reportClassrooms(s) {
    console.log('%c --------- Classrooms Report ---------', 'background: #222; color: #bada55')

    //total and average number of students in classrooms.
    console.log(`Our ${s.length} classrooms have a total number of ${sum} students, with an average of ${ratio} students per classroom.`)

    s.forEach(el => el.classifyClassrooms())
}

reportSchools(allSchools);
reportClassrooms(allClassrooms);