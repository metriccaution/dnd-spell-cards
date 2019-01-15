import * as React from "react";
import * as ReactDom from "react-dom";
// Raw data imports
import { spells } from "./data/spells";
import { spellsKnown } from "./data/spells-known";
import SpellList from "./spell-list";

ReactDom.render(
  <SpellList spellList={spells} spellsKnown={spellsKnown} />,
  document.getElementById("main")
);
