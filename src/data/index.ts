import { DataSource } from "../types";
import pages from "./spell-pages";
import sources from "./spell-sources";
import spells from "./spells";

const data: DataSource = { spells, pages, sources, aliases: [] };
export default data;
