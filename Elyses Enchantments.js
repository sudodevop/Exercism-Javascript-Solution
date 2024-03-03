export function getItem(cards, position) {
  const cardPosition = cards[position];
  return cardPosition;
  console.log(cardPosition);
}

export function setItem(cards, position, replacementCard) {
  const newArray = cards[position];
  cards[position] = replacementCard;
  replacementCard = newArray;
  return cards;
  console.log(cards);
}

export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  console.log(cards);
  return cards;
}

export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

export function checkSizeOfStack(cards, stackSize) {
  const cardLength = cards.length;
  console.log(cardLength === stackSize);
  return cardLength === stackSize;
}
