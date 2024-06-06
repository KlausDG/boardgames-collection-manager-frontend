import * as yup from "yup";

const DefaultPropertiesSchema = yup.object().shape({
  id: yup.string().required(),
  value: yup.string().required(),
});

export const AddBoardgameSchema = yup.object().shape({
  name: DefaultPropertiesSchema.required("Name is required"),
  thumbnail: yup.string().required("Thumbnail is required"),
  description: yup.string(),
  publishedYear: yup.number().required("Published Year is required"),
  language: yup.string().default("English"),
  minPlayers: yup.number().positive(),
  maxPlayers: yup.number().positive(),
  minPlaytime: yup.number().positive(),
  maxPlaytime: yup.number().positive(),
  designers: yup.array().of(DefaultPropertiesSchema).required(),
  publishers: yup.array().of(DefaultPropertiesSchema).required(),
  inCollection: yup.boolean().default(true),
  category: yup.string().required(),
  purchasedValue: yup.number().positive(),
  bestPlayersCount: yup.string(),
  rank: yup.number().positive(),
  weight: yup.number().positive(),
  link: yup.string().required("Bgg link is required"),
});

export type AddBoardgame = yup.InferType<typeof AddBoardgameSchema>;
export type DefaultProperties = yup.InferType<typeof DefaultPropertiesSchema>;
