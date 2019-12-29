import test from "ava";
import { readFileSync } from "fs";
import { resolve } from "path";
import validateDataSource from "./data-schemas";

test("Bundled data matches schema", t => {
  const dataPath = resolve(__dirname, "..", "..", "static", "srd-data.json");
  const data = JSON.parse(readFileSync(dataPath, "utf8"));
  t.notThrows(() => validateDataSource(data));
});
