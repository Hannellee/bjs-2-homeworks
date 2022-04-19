'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;

  if (d < 0) {
    return arr;
  }

  else if (d === 0) {
    let res = -b/(2*a);
    arr.push(res);
    return arr;
  }

  else {
    arr.push(((-b + Math.sqrt(d) )/(2*a)));
    arr.push(((-b - Math.sqrt(d) )/(2*a)));
    return arr;
  }
}

'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent)) {
    console.log(`Параметр "Процентная ставка" содержит неправильное значение ${percent}`);
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    return totalAmount;
  } else if (isNaN(contribution)) {
    console.log(`Параметр "Начальный взнос" содержит неправильное значение ${contribution}`);
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    return totalAmount;
  } else if (isNaN(amount)) {
    console.log(`Параметр "Общая стоимость" содержит неправильное значение ${amount}`);
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    return totalAmount;
  } else {
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);


    let creditBody = amount - contribution;

    let dateNow = Number(new Date());
    let dateInput = date.getTime();

    let monthsQuantity = (dateInput - dateNow) / (1000 * 60 * 60 * 24 * 30.42);
    monthsQuantity = Math.round(monthsQuantity);

    percent = percent / 1200;

    let amountPerMonth = creditBody * (percent + (percent / (((1 + percent) ** monthsQuantity) - 1)))

    totalAmount = Number((amountPerMonth * monthsQuantity).toFixed(2));

    console.log(`Обая сумма кредита равна ${totalAmount}`)
    return totalAmount;
  }
}
