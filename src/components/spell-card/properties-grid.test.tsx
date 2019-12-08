import test, { Macro } from "ava";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import * as React from "react";
import PropertiesGrid, { PropertiesGridProps } from "./properties-grid";

configure({ adapter: new Adapter() });

const renderGridTest: Macro<[PropertiesGridProps]> = (t, props) => {
  const wrapper = shallow(<PropertiesGrid {...props} />);

  t.snapshot(toJson(wrapper));
};

test("Empty grid", renderGridTest, {
  properties: []
});

test("Some items", renderGridTest, {
  properties: [
    ["X", "Y"],
    ["A", "B"],
    ["X", "Y"],
    ["X", "Y"]
  ]
});

test("All missing", renderGridTest, {
  properties: [
    ["X", null],
    ["A", null],
    ["X", null],
    ["X", null]
  ]
});

test("Some missing", renderGridTest, {
  properties: [
    ["X", "Y"],
    ["A", null],
    ["X", null],
    ["B", "Y"]
  ]
});
