import { array, bool, number, object, string } from "yup";
import { DataSource, SpellComponent } from "./types";

const aliasSchema = object()
  .shape({
    names: array()
      .of(string().min(1))
      .min(2)
      .required()
  })
  .strict(true);

const sourceSchema = object().shape({
  knownBy: string()
    .min(1)
    .required(),
  spells: array()
    .of(string().min(1))
    .min(1)
    .required()
});

const pageSchema = object().shape({
  spellName: string()
    .min(1)
    .required(),
  page: object().shape({
    pageNumber: number()
      .min(1)
      .required(),
    book: string()
      .min(1)
      .required()
  })
});

const spellSchema = object().shape({
  name: string()
    .min(1)
    .required(),
  range: string()
    .min(1)
    .required(),
  material: string()
    .nullable(true)
    .min(1),
  components: array()
    .of(string().oneOf(["V", "S", "M"]))
    .min(1)
    .required(),
  description: array()
    .of(
      string()
        .min(1)
        .required()
    )
    .min(1)
    .required(),
  higherLevel: array()
    .of(
      string()
        .min(1)
        .required()
    )
    .default([]),
  ritual: bool().default(false),
  concentration: bool().default(false),
  duration: string()
    .min(1)
    .required(),
  castingTime: string()
    .min(1)
    .required(),
  school: string()
    .oneOf([
      "Abjuration",
      "Conjuration",
      "Divination",
      "Enchantment",
      "Evocation",
      "Illusion",
      "Necromancy",
      "Transmutation"
    ])
    .required(),
  level: number()
    .min(0)
    .max(9)
    .required()
});

/**
 * Check that everything is as it should be in a source book
 */
const dataSourceSchema = object().shape({
  aliases: array().of(aliasSchema),
  sources: array().of(sourceSchema),
  pages: array().of(pageSchema),
  spells: array().of(spellSchema)
});

export default function validateDataSource(original: DataSource): DataSource {
  const validated = dataSourceSchema.validateSync(original);

  return {
    ...validated,
    spells: validated.spells.map(spell => ({
      ...spell,
      components: spell.components as SpellComponent[]
    }))
  };
}
