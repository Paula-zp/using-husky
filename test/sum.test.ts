import { sum } from "../src/index";

test("soma 2 + 2 = 4", () => {
    expect(sum(2, 2)).toBe(8);
});
