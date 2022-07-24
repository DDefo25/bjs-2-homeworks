function parseCount(value) {
    let valueIsNumber = Number.parseInt(value);
    if (isNaN(valueIsNumber)) throw new Error('Невалидное значение');
    return valueIsNumber;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error) {
        return error;
    }
}