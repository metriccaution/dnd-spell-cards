const fs = require("fs");
const prettier = require("prettier");

const rawData = JSON.parse(fs.readFileSync("static/srd-data.json", "utf8"));

const parsed = {
  ...rawData,
  spells: rawData.spells.map(spell => ({
    ...spell,
    description: prettier
      .format(spell.description, { parser: "markdown" })
      .trim(),
    higherLevel: spell.higherLevel
      ? prettier.format(spell.higherLevel, { parser: "markdown" }).trim()
      : null
  }))
};

const output = prettier.format(JSON.stringify(parsed), {
  parser: "json"
});

fs.writeFileSync("static/srd-data.json", output, "utf8");
