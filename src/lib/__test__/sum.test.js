import "@testing-library/jest-dom/extend-expect";
import sum from "../sum";

describe("Test", () => {
  beforeAll(() => {});
  test("fonkssiyon iki sayinin toplamini donmeli", async () => {
    const x = 3;
    const y = 2;
    const toplam = sum(x, y);
    expect(toplam).toBe(5);
  });
  test("Test with import from render", async () => {
    const x = "bulut";
    const y = 2;
    const toplam = sum(x, y);
    expect(toplam).toBe("bulut2");
  });
});
