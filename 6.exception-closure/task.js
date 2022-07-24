function parseCount(value) {
    let valueIsNumber = Number.parseInt(value);
    if (isNaN(valueIsNumber)) {
        throw new Error('Невалидное значение');
    }
    return valueIsNumber;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || b + c < a || c + a < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.sides = [a, b, c];
    }

    getPerimeter() {
        return this.sides.reduce((sum, value) => sum + value);
    }

    getArea() {
        let halfPerimeter = this.getPerimeter() / 2;
        return Number(Math.sqrt(halfPerimeter * this.sides.reduce((sum, value) => sum * (halfPerimeter - value), 1)).toFixed(3))
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует'
            },
            getArea() {
                return 'Ошибка! Треугольник не существует'
            }
        }
    }
}