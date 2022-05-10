// Задача 1

class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.state = 100;
        this.type = null;

        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }

    fix() {
        return this.state = 1.5 * this.state;
    }

    set state(stateFixed) {
        if(stateFixed < 0) {
            this._state = 0;
        } else if(stateFixed > 100) {
            this._state = 100;
        } else {
            this._state = stateFixed;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


// Задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let bookFinded = this.books.find(book => book[type] === value);
        if(bookFinded) {
            return bookFinded;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let bookGiven = this.books.find(book => book.name === bookName);
        if(bookGiven) {
            let bookIndex = this.books.indexOf(bookGiven);
            this.books.splice(bookIndex, 1);
            return bookGiven;
        } else {
            return null;
        }
       
    }
}


// Задача 3


class Student {

    constructor(name) {
        this.name = name;
        this.journal = {};
    }

    // setSubject(subjectName) {
    // }

    addMark(mark, subjectName) {

        if(this.journal.hasOwnProperty(subjectName)) {
            console.log('Предмет уже существует')
        } else {
            this.journal[subjectName] = [];
            console.log('Создан новый предмет')
        }
        
        if((typeof mark === 'number') && (mark >= 1) && (mark <= 5)) {
            this.journal[subjectName].push(mark);
        } else {
            console.log('Ошибка!')
        }
    }

    getAverageBySubject(subjectName) {

        if (this.journal.hasOwnProperty(subjectName)) {

            let sum = 0;
            let marks = this.journal[subjectName];

            marks.forEach((item, idx, marks) => sum += item);
            let averageBySubject = sum / marks.length;
            return averageBySubject;
        } else {
            console.log("Несуществующий предмет");
        }
    }

    getAverage() {
        // Здесь не понимаю, как обратиться ко всем оценкам...

        let sum = 0;
        let marks;
        // Вот здесь, чему будет равен изначально marks? 
        // Понимаю, что наверное нужно как-то объединить все массвы с оценками, но не понимаю, как..

        marks.forEach((item, idx, marks) => sum += item);
        let averageAll = sum / marks.length;
        return averageAll;
    }

    exclude(reason) {
        delete this.journal;
        this.excluded = reason;
      }
}


// Student.prototype.addMarks = function (...mark) {

//   if(this.marks === undefined){ 
//     this.marks = [];
//     }
//     mark.forEach((item, idx, marks) => this.marks.push(mark[idx]));
// }