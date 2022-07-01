'use strict'

function solveEquation(a, b, c) {
  let arr = new Array;
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D === 0) {
    arr.push(-b / (2 * a));
  } else if (D > 0) {
    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a));
  };
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let dateEnd = new Date(date);
  let dateNow = new Date;

  function errorOfTypeMessage(obj, value) {
    return `Параметр ${obj} содержит неправильное значение ${value}`;
  }

  if (Number.isNaN(Number(percent))) return errorOfTypeMessage('percent', percent);
  if (Number.isNaN(Number(contribution))) return errorOfTypeMessage('contribution', contribution);
  if (Number.isNaN(Number(amount))) return errorOfTypeMessage('amount', amount);
  if (dateEnd == 'Invalid Date') return errorOfTypeMessage('date', date);

  let mortgageAmount = amount - contribution;

  let mortgageMonths = (dateEnd.getMonth() - dateNow.getMonth()) + (dateEnd.getFullYear() - dateNow.getFullYear()) * 12;

  console.log(mortgageMonths); 


  return totalAmount;
}

console.log(calculateTotalMortgage(111, 1, 2, '2025.07.15'))

// let date1 = new Date('2020.df.20')
// console.log(date1)
// console.log(Number.isNaN(Number(dateSplited)))