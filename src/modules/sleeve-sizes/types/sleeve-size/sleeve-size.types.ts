import * as yup from "yup";

import { SleeveSizeSchema } from "../../dto";

export type SleeveSize = yup.InferType<typeof SleeveSizeSchema>;
