/*
 * A very rudimentary editor for the data here, absolutely not ready to be used
 */
import { produce } from "immer";
import * as React from "react";
import { collateDataSources, validateDataSource } from "../../spell-data";
import { DataSource, FullSpell } from "../../types";

export interface SpellEditorState {
  spellData: DataSource[];
  spellSelection: {
    name: string | null;
  };
}

export default class SpellEditor extends React.Component<{}, SpellEditorState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      spellData: [],
      spellSelection: {
        name: null
      }
    };
  }

  public async componentWillMount() {
    const res = await fetch("srd-data.json");
    const parsed = await res.json();
    this.loadData(parsed, true);
  }

  public render() {
    const { spellData, spellSelection } = this.state;
    const matchingSpell = collateDataSources(spellData).find(
      spell => spell.name === spellSelection.name
    );
    const spellDisplay = matchingSpell ? (
      <Editor spell={matchingSpell} update={this.updateSpell.bind(this)} />
    ) : (
      `No match for "${spellSelection.name}"`
    );

    return (
      <div>
        <a
          target="_blank"
          onClick={event => {
            const blob = new Blob([JSON.stringify(spellData[0], null, 4)], {
              type: "application/json"
            });
            const url = window.URL.createObjectURL(blob);
            (event.target as HTMLAnchorElement).href = url;
          }}
        >
          Download New File
        </a>
        <select onChange={e => this.chooseSpell(e.target.value)}>
          {collateDataSources(spellData)
            .sort((a, b) =>
              a.name
                .toLocaleLowerCase()
                .localeCompare(b.name.toLocaleLowerCase())
            )
            .map(spell => (
              <option key={spell.name}>{spell.name}</option>
            ))}
        </select>
        {spellDisplay}
      </div>
    );
  }

  private loadData(source: DataSource, validate: boolean = true) {
    if (validate) {
      validateDataSource(source);
    }

    this.setState(
      produce(this.state, draft => {
        draft.spellData.push(source);
      })
    );
  }

  private chooseSpell(value: string | null) {
    this.setState(
      produce(this.state, draft => {
        draft.spellSelection.name = value;
      })
    );
  }

  private updateSpell(spell: FullSpell) {
    this.setState(
      produce(this.state, draft => {
        draft.spellData.forEach(data =>
          data.spells.forEach(oldSpell => {
            if (oldSpell.name === spell.name) {
              oldSpell.description = spell.description;
              oldSpell.higherLevel = spell.higherLevel;
            }
          })
        );
      })
    );
  }
}

export interface EditorProps {
  spell: FullSpell;
  update: (spell: FullSpell) => void;
}
const Editor = ({ spell, update }: EditorProps) => (
  <div>
    <h1>{`Editing "${spell.name}"`}</h1>

    <h2>Description</h2>
    <textarea
      style={{
        height: "20em",
        width: "60%",
        margin: "1em 3em"
      }}
      value={spell.description}
      onChange={e =>
        update({
          ...spell,
          description: e.target.value
        })
      }
    />
    <h2>Higher Level</h2>
    <textarea
      style={{
        height: "20em",
        width: "60%",
        margin: "1em 3em"
      }}
      value={spell.higherLevel || ""}
      onChange={e =>
        update({
          ...spell,
          higherLevel: e.target.value.trim() ? e.target.value : null
        })
      }
    />
  </div>
);
