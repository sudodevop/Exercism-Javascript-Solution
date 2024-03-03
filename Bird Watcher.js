export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((acc, curr) => acc + curr);
}

export function birdsInWeek(birdsPerDay, week) {
  const weekIndex = (week - 1) * 7;
  return totalBirdCount(birdsPerDay.slice(weekIndex, weekIndex + 7));
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}
