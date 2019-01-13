import * as React from "react";
import * as ReactDom from "react-dom";
import SpellList from "./spell-list";
import { spells } from "./spells";

ReactDom.render(
  <SpellList spellList={spells} />,
  document.getElementById("main")
);
