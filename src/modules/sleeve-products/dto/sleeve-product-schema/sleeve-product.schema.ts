import * as yup from "yup";

export const SleeveProductSchema = yup.object().shape({
  brand: yup.string().required("Brand is required"),
  category: yup.string().required("Category is required"),
  sleevesPerPack: yup.number().required(),
});
