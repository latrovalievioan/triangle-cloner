import { describe, test, expect, beforeEach } from "vitest";
import Cloner from "./index";

describe("render", () => {
  let container: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    container = document.getElementById("root") as HTMLElement;
  });

  test("doesn't crash", () => {
    const element = Cloner.createElement("ul", { id: "test" });

    expect(() => Cloner.render(element, container)).not.toThrowError;
  });

  test("renders textElement correctly", () => {
    const element = {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: "hello",
        children: [],
      },
    };

    Cloner.render(element, container);

    expect(container.firstChild?.textContent).toEqual("hello");
  });

  test("renders tree correctly", () => {
    const h1 = Cloner.createElement("h1", { id: "h1" }, "HELLO");
    const h2 = Cloner.createElement("h2", { id: "h2" }, "hello");
    const div = Cloner.createElement("div", { id: "div" }, h1, h2);

    Cloner.render(div, container);

    expect(container.firstChild?.firstChild?.textContent).toEqual("HELLO");
    expect(container.firstChild?.lastChild?.textContent).toStrictEqual("hello");
  });

  test("puts correct props on a rendered elements", () => {
    const handleClick = () => alert("YEAH");
    const div = Cloner.createElement("div", {
      id: "div",
      onClick: handleClick,
    });

    Cloner.render(div, container);

    expect(container.firstChild).toMatchObject({
      id: "div",
      onClick: handleClick,
    });
  });
});
