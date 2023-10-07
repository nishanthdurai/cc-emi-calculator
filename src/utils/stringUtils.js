export const addCommasToNumber = (number) => {
  // Use regex to add commas to the number
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
