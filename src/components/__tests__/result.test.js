import React from "react";
import { render } from "../../test-utils";
import Result from "../result";
import "@testing-library/jest-dom/extend-expect";

describe("Test", () => {
  beforeAll(() => {});
  test("result component", async () => {
    const { getByTestId } = render(
      <Result first={"hello"} second={"pelin"} operator={"+"} />
    );
    const component = await getByTestId("result-component");

    expect(component.className).toBe("Result");
    expect(component.innerHTML).toBe("hello+pelin");
  });
});
