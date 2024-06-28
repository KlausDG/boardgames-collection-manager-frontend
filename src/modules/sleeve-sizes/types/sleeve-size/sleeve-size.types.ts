import * as yup from "yup";

import { SleeveSizeSchema } from "../../dto";

export type SleeveSizeFormData = yup.InferType<typeof SleeveSizeSchema>;

export type SleeveSize = SleeveSizeFormData & {
  id: number;
};
