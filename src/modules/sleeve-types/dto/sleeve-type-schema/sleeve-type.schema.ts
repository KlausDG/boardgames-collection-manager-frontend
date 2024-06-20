import * as yup from "yup";

export const SleeveTypeSchema = yup.object().shape({
  type: yup.string().required("Name is required"),
  width: yup.number().required("Width is required"),
  height: yup.number().required("Height is required"),
});
