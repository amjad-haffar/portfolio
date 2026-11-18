import type { Gift } from './data';

export function selectGift(collection: readonly Gift[], openedIds: readonly string[]) {
  return collection.find((gift) => !openedIds.includes(gift.id));
}

export function giftMessage(opened: number, remaining: number) {
  if (remaining === 0) return 'Well, there goes my entire inventory.';
  if (opened === 1) return "It's supposed to be one per person, but...";
  if (opened === 2) return "Someone's getting greedy.";
  if (opened === 3) return 'This is becoming a problem.';
  if (opened === 4) return 'At this point, just take the wrapping paper too.';
  if (opened === 5) return 'You do realise there’s an entire website behind this, right?';

  return 'Found room for another little surprise?';
}

