const isValidColor = (color) => {
  return color.length > 0 && color.length < 30
};

test('validates color name is not empty', () => {
  expect(isValidColor("")).toBe(false);
});

test('validates normal color names can pass', () => {
  expect(isValidColor("Navy Blue")).toBe(true);
});
