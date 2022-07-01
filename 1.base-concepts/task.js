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
  let dateEnd = new Date(date);
  let dateNow = new Date;

  function errorOfTypeMessage(obj, value) {
    return `Параметр "${obj}" содержит неправильное значение "${value}"`;
  }

  if (Number.isNaN(Number(percent))) return errorOfTypeMessage('Процентная ставка', percent);
  if (Number.isNaN(Number(contribution))) return errorOfTypeMessage('Начальный взнос', contribution);
  if (Number.isNaN(Number(amount))) return errorOfTypeMessage('Общая стоимость', amount);
  if (dateEnd == 'Invalid Date') return errorOfTypeMessage('date', date);

  let mortgageAmount = amount - contribution;

  let mortgageMonths = (dateEnd.getMonth() - dateNow.getMonth()) + (dateEnd.getFullYear() - dateNow.getFullYear()) * 12;

  let percentMonthly = (percent / 100) / 12;

  let monthlyPayments = mortgageAmount * (percentMonthly + (percentMonthly / (Math.pow((1 + percentMonthly), mortgageMonths) - 1)));

  let totalMortgageAmount = (monthlyPayments * mortgageMonths).toFixed(2);

  return Number(totalMortgageAmount);
}