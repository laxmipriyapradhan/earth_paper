export const isValidString = (val: string | undefined | null): boolean => {
  return val !== '' && val !== undefined && val !== null;
};
