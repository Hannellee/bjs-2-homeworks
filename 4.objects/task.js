function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student1 = new Student("Tony", "male", 37);
let student2 = new Student("Buzz", "female", 35);
let student3 = new Student("Anna", "female", 32)

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {

  if(this.marks === undefined){ 
    this.marks = [];
    } 
    this.marks.push(mark);
}

Student.prototype.addMarks = function (...mark) {

  if(this.marks === undefined){ 
    this.marks = [];
    }
    mark.forEach((item, idx, marks) => this.marks.push(mark[idx]));
}

Student.prototype.getAverage = function (...marks) {

  let sum = 0;
  let allMarks = this.marks;

  if(allMarks === undefined) { 
    return sum;
    }
    allMarks.forEach((item, idx, marks) => sum += allMarks[idx]);

    return sum / allMarks.length
}

Student.prototype.exclude = function (reason) {

  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}