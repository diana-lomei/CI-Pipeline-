const sum = require("../sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds -5 + -3 to equal -8", () => {
  expect(sum(-5, -3)).toBe(-8);
});

test("adds decimals correctly", () => {
  expect(sum(0.2, 0.3)).toBeCloseTo(0.5);
});
