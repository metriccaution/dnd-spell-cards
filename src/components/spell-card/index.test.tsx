import test, { Macro } from "ava";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import * as React from "react";
import { SpellCard } from ".";
import { FullSpell } from "../../types";

configure({ adapter: new Adapter() });

const renderSpellTest: Macro<[FullSpell]> = (t, spell) => {
  const wrapper = shallow(<SpellCard spell={spell} />);

  t.snapshot(toJson(wrapper));
};

test("Average spell", renderSpellTest, {
  aliases: ["Bob's magic beans"],
  castingTime: "1 action",
  components: ["M"],
  concentration: true,
  description: ["You sprinkle some beans around", "They grow gigantically"],
  duration: "Forever",
  higherLevel: ["There are some more beams"],
  knownBy: ["Bob", "Bob's friends"],
  level: 12,
  material: "Some beans",
  name: "Beanstalk",
  pages: [
    {
      book: "Bumper book of spells vol. 12",
      pageNumber: 5
    }
  ],
  range: "Self",
  ritual: true,
  school: "Legumancy"
});

test("Minimum data", renderSpellTest, {
  aliases: [],
  castingTime: "",
  components: [],
  concentration: false,
  description: [],
  duration: "",
  higherLevel: [],
  knownBy: [],
  level: 1,
  material: null,
  name: "",
  pages: [],
  range: "",
  ritual: false,
  school: ""
});
