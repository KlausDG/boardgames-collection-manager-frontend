import * as yup from "yup";

export const SleeveSizeSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  width: yup.number().required("Width is required"),
  height: yup.number().required("Height is required"),
});
