export const cssConcat = (...str: string[]): string => {
  return str.join(' ');
};

export const comma = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
