export const editPrice = (fullPrice: number) => {
  if (Number.isInteger(fullPrice)) {
    return fullPrice + " ₸";
  } else {
    return (fullPrice.toFixed(2) + "").replace(".", ",") + " ₸";
  }
};

it("returns string with currency", () => {
  expect(editPrice(42.76)).toEqual("42,76 ₸");
  expect(editPrice(123)).toEqual("123 ₸");
  expect(editPrice(35.7)).toEqual("35,70 ₸");
});