export const prepareHash = (...data: (string | number)[]): string => {
  return data.reduce<string>((prev, curr) => {
    if (typeof curr === 'number') {
      return prev + curr.toString() + '_';
    }

    return prev + curr.toLocaleLowerCase().slice(0, 5).replaceAll(' ', '-') + '_';
  }, '#');
}
