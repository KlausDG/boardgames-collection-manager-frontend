import * as yup from "yup";

import { SleeveProductSchema } from "../../dto";

export type SleeveProduct = yup.InferType<typeof SleeveProductSchema>;
