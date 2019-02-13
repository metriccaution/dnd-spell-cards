import dataSet from ".";
import validateDataSource from "../data-schemas";

import test from "ava";

test("Existing data matches our own schema", t => {
  t.notThrows(() => validateDataSource(dataSet));
});
