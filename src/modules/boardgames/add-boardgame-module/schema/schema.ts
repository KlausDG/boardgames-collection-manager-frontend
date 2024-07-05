import * as yup from "yup";

const DefaultPropertiesSchema = yup.object().shape({
  id: yup.number(),
  value: yup.string(),
});

export const AddBoardgameSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  thumbnail: yup.string().required("Thumbnail is required"),
  description: yup.string(),
  yearPublished: yup.number().required("Published Year is required"),
  language: yup.string().default("English"),
  minPlayers: yup.number().positive().notRequired(),
  maxPlayers: yup.number().positive().notRequired(),
  minPlaytime: yup.number().positive().notRequired(),
  maxPlaytime: yup.number().positive().notRequired(),
  designers: yup.array().of(yup.string().required()).required(),
  publisher: yup.string().required(),
  inCollection: yup.boolean().default(true),
  category: yup.string().required(),
  purchasedPrice: yup.number(),
  bestPlayerCount: yup.string(),
  bggRank: yup.number().positive().notRequired(),
  weight: yup.number().positive(),
  bggLink: yup.string().required("Bgg link is required"),
  bggId: yup.number(),
  languageDependence: yup.string(),
  isExpansion: yup.boolean().default(false),
  isExpansionFor: DefaultPropertiesSchema,
});

export type AddBoardgame = yup.InferType<typeof AddBoardgameSchema>;
export type DefaultProperties = yup.InferType<typeof DefaultPropertiesSchema>;
