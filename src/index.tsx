import * as React from "react";
import * as ReactDom from "react-dom";
import { spells } from "./spells";
import SpellList from "./spell-list";

ReactDom.render(
  <SpellList spellList={spells} />,
  document.getElementById("main")
);
