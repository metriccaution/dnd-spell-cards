import test from "ava";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import * as React from "react";
import { fake } from "sinon";
import { SideBar } from ".";

configure({ adapter: new Adapter() });

test("Basic rendering test", t => {
  const wrapper = shallow(
    <SideBar
      levelFilter={{ min: 2, max: 12 }}
      selectedSources={["X", "Y", "Z"]}
      sourceNames={["A", "B", "C", "X", "Y", "Z"]}
      loadExtraData={fake()}
      setLevelFilter={fake()}
      toggleSpellSource={fake()}
    />
  );

  t.snapshot(toJson(wrapper));
});

test("Setting the minimum level", t => {
  const setLevelFilter = fake();

  const wrapper = shallow(
    <SideBar
      levelFilter={{ min: 2, max: 12 }}
      selectedSources={["X", "Y", "Z"]}
      sourceNames={["A", "B", "C", "X", "Y", "Z"]}
      loadExtraData={fake()}
      setLevelFilter={setLevelFilter}
      toggleSpellSource={fake()}
    />
  );

  wrapper
    .find('input[name="min-level"]')
    .simulate("change", { target: { valueAsNumber: 12 } });

  t.is(setLevelFilter.callCount, 1);
  t.deepEqual(setLevelFilter.getCall(0).args, ["min", 12]);
});

test("Setting the maximum level", t => {
  const setLevelFilter = fake();

  const wrapper = shallow(
    <SideBar
      levelFilter={{ min: 2, max: 12 }}
      selectedSources={["X", "Y", "Z"]}
      sourceNames={["A", "B", "C", "X", "Y", "Z"]}
      loadExtraData={fake()}
      setLevelFilter={setLevelFilter}
      toggleSpellSource={fake()}
    />
  );

  wrapper
    .find('input[name="max-level"]')
    .simulate("change", { target: { valueAsNumber: 12 } });

  t.is(setLevelFilter.callCount, 1);
  t.deepEqual(setLevelFilter.getCall(0).args, ["max", 12]);
});

test("Toggling sources", t => {
  const toggleSpellSource = fake();

  const wrapper = shallow(
    <SideBar
      levelFilter={{ min: 2, max: 12 }}
      selectedSources={["X", "Y", "Z"]}
      sourceNames={["A", "B", "C", "X", "Y", "Z"]}
      loadExtraData={fake()}
      setLevelFilter={fake()}
      toggleSpellSource={toggleSpellSource}
    />
  );

  wrapper
    .find("#choose-filter-X")
    .simulate("change", { target: { valueAsNumber: 12 } });
  t.is(toggleSpellSource.callCount, 1);
  t.deepEqual(toggleSpellSource.getCall(0).args, ["X"]);
});
