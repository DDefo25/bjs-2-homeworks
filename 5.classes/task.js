class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(state) {
        if (state < 0) this.state = 0;
        else if (state > 100) this.state = 100;
        else this._state = state;
    };

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name, books = []) {
        this.name = String(name);
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) this.books.push(book);
    }

    findBookBy(type, value) {
        let findResult = this.books.find(book => book[type] === value);
        if (findResult === undefined) return null;
        else return findResult;
    }

    giveBookByName(bookName) {
        let findResult = this.findBookBy('name', bookName);
        if (findResult) {
            this.books.splice(this.books.indexOf(findResult), 1)
            return findResult;
        } else return null;
    }
}

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    
    addMark(mark, subject) {
        if (mark > 5 || mark < 1) {
            return 'Ошибка, оценка должна быть числом от 1 до 5'
        }

        if (this.gradesList === undefined) {
            this.gradesList = [];
        }

        let findResult = this.gradesList.find(subjectName => subjectName.subject === subject);

        if (findResult === undefined) {
            this.gradesList.push({
                subject, 
                marks: [mark]
            })
        } else {
            findResult.marks.push(mark);
        }
    }

    getAverageBySubject(subject) {
        let findResult = this.gradesList.find(subjectName => subjectName.subject === subject);
        if (findResult === undefined) return 'Несуществующий предмет'
        return findResult.marks.reduce((sum, current) => sum + current, 0) / findResult.marks.length;
    }

    getAverage() {
        let subjectSum = 0;
        this.gradesList.forEach(subject => {
            subjectSum += subject.marks.reduce((sum, current) => sum + current, 0) / subject.marks.length;
        })
        return subjectSum / this.gradesList.length;
    }

    
    exclude(reason) {
        delete this.gradesList;
        this.excluded = reason;
    }
}