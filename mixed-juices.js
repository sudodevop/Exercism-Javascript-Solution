
export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5
      break;
    case 'Energizer':
      return 1.5
      break;
      case 'Green Garden':
      return 1.5
      break;
    case 'Tropical Island':
      return 3
      break;
    case 'All or Nothing':
      return 5
      break;
    default:
      return 2.5
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let totalWedges = 0;
  let limesCut = 0;
  let wedges = 0;  
  
  while ((limesCut < limes.length) && (totalWedges <= wedgesNeeded)) {
    switch (limes[limesCut]) {
      case "small":
        wedges = 6;
        break;
      case "medium":
        wedges = 8;
        break;
      case "large":
        wedges = 10;
        break;
    }    
    totalWedges += wedges;
    if (wedgesNeeded > 0) {
      limesCut++;
    }
  }
  return limesCut;
}
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft = timeLeft - timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}
