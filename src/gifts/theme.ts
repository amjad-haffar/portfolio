export type GiftTheme = {
  season: 'ordinary' | 'christmas' | 'halloween' | 'easter';
  wrapping: string;
  ribbon: string;
};

// All seasons use the present illustration for now. New artwork can use season.
export function getGiftTheme(date = new Date()): GiftTheme {
  const month = date.getMonth();
  if (month === 11) return { season: 'christmas', wrapping: '#6f398b', ribbon: '#f0cf91' };
  if (month === 9) return { season: 'halloween', wrapping: '#82509a', ribbon: '#f0c79b' };
  if (month === 2 || month === 3) return { season: 'easter', wrapping: '#aa80bb', ribbon: '#eedcf4' };
  return { season: 'ordinary', wrapping: '#8752a0', ribbon: '#ead3f5' };
}

