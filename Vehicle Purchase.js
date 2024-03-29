export function needsLicense(kind) {
  return kind === "car" || kind === "truck";
}

export function chooseVehicle(option1, option2) {
  if (option1 < option2) {
    return option1 + " is clearly the better choice.";
  } else {
    return option2 + " is clearly the better choice.";
  }
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice - originalPrice * 0.2;
  } else if (age > 10) {
    return originalPrice - originalPrice * 0.5;
  } else if (age >= 3 && age <= 10) {
    return originalPrice - originalPrice * 0.3;
  }
}
