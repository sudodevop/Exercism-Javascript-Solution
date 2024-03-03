export function dayRate(ratePerHour) {
  const ratePh = ratePerHour * 8;
  console.log(ratePh);
  return ratePh;
}

export function daysInBudget(budget, ratePerHour) {
  const budgetDay = ratePerHour * 8;
  const budgetDays = budget / budgetDay;
  console.log(Math.floor(budgetDays));
  return Math.floor(budgetDays);
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dayRat = ratePerHour * 8;
  const discountDay = 22 * Math.floor(numDays / 22);
  const discountDayRate = dayRat * discountDay;
  const remainingDays = numDays % 22;
  const remainingAmount = remainingDays * dayRat;
  const amountDiscountDay = discountDayRate - discountDayRate * discount;
  const totalamountDiscount = amountDiscountDay + remainingAmount;
  console.log(Math.ceil(totalamountDiscount));
  return Math.ceil(totalamountDiscount);
}
