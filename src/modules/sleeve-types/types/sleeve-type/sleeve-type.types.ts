import * as yup from "yup";

import { SleeveTypeSchema } from "../../dto";

export type SleeveType = yup.InferType<typeof SleeveTypeSchema>;
