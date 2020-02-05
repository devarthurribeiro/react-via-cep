import React from "react";
import renderer from "react-test-renderer";
import ViaCep from "./ViaCep";

describe("ViaCep", () => {
  it("snapshot renders", () => {
    const component = renderer.create(<ViaCep cep="">{() => {}}</ViaCep>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});
