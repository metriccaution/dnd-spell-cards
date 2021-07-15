import {
  AnySchema,
  array,
  bool,
  mixed,
  number,
  object,
  ObjectSchema,
  SchemaOf,
  string
} from "yup";
import {
  DataSource,
  PageData,
  Spell,
  SpellAlias,
  SpellComponent,
  SpellSources
} from "../types";

const obj = <T extends Record<string, any>>(shape: T): ObjectSchema<T> => {
  return object()
    .noUnknown()
    .required()
    .defined()
    .shape(shape);
};

const aliasSchema: SchemaOf<SpellAlias> = obj({
  names: array()
    .of(
      string()
        .required()
        .min(1)
    )
    .min(2)
    .required()
});

const sourceSchema: SchemaOf<SpellSources> = obj({
  knownBy: string()
    .min(1)
    .defined(),
  spells: array()
    .of(
      string()
        .defined()
        .min(1)
    )
    .min(1)
    .defined()
});

const pageSchema: SchemaOf<PageData> = obj({
  spellName: string()
    .min(1)
    .defined(),
  page: object().shape({
    pageNumber: number()
      .min(1)
      .defined(),
    book: string()
      .min(1)
      .defined()
  })
});

const spellSchema: SchemaOf<Spell> = obj({
  name: string()
    .min(1)
    .defined(),
  range: string()
    .min(1)
    .defined(),
  material: string()
    .nullable(true)
    .defined()
    .min(1),
  components: array()
    .of(
      mixed()
        .oneOf(["V", "S", "M"])
        .defined()
    )
    .min(1)
    .defined(),
  description: array()
    .of(
      string()
        .min(1)
        .defined()
    )
    .min(1)
    .defined(),
  higherLevel: array()
    .of(
      string()
        .min(1)
        .defined()
    )
    .default([]),
  ritual: bool()
    .defined()
    .default(false),
  concentration: bool()
    .defined()
    .default(false),
  duration: string()
    .min(1)
    .defined(),
  castingTime: string()
    .min(1)
    .defined(),
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
    .defined(),
  level: number()
    .min(0)
    .max(9)
    .defined()
});

// const blah = <T> = (itemSchema : SchemaOf)

/**
 * Check that everything is as it should be in a source book
 */
const dataSourceSchema: SchemaOf<DataSource> = obj({
  aliases: array()
    .of(aliasSchema)
    .defined(),
  sources: array()
    .of(sourceSchema)
    .defined(),
  pages: array()
    .of(pageSchema)
    .defined(),
  spells: array()
    .of(spellSchema)
    .defined()
});

export default function validateDataSource(original: unknown): DataSource {
  const validated = dataSourceSchema.validateSync(original);
  return validated as DataSource;
}
