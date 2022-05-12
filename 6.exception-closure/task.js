// Задача 1


function parseCount(value) {
    let number = Number.parseInt(value, 10);
    if(isNaN(number)) {
        throw new Error('Невалидное значение');
    }

    return number;
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch(err) {
        return err;
    }
}


// Задача 2


class Triangle {
    constructor(a, b, c) {
        if(((a + b) < c) || ((b + c) < a) || ((a + c) < b)) {
            throw new Error('Треугольник с такими сторонами не существует');          
        }

        this.a = a;
        this.b = b;
        this.c = c;  
    }

    getPerimeter() {
        return Number(this.a + this.b + this.c);
        
    }

    getArea() {
        let p = (this.getPerimeter()) / 2;
        // p = p / 2;

        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } 
    catch(err) {        
        
        return {getArea: function() {return ('Ошибка! Треугольник не существует')}, 
        getPerimeter: function() {return ('Ошибка! Треугольник не существует')}};    
    }
}