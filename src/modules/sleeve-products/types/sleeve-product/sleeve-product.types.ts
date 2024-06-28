import * as yup from "yup";

import { SleeveBrand } from "@/modules/sleeve-brands";
import { SleeveSize } from "@/modules/sleeve-sizes";

import { SleeveProductSchema } from "../../dto";

export type SleeveProductFormData = yup.InferType<typeof SleeveProductSchema>;

export type SleeveProduct = {
  id: number;
  brand: SleeveBrand;
  size: SleeveSize;
  category: string;
  sleevesPerPack: number;
  stocks: Array<{
    id: number;
    amount: number;
  }>;
};
