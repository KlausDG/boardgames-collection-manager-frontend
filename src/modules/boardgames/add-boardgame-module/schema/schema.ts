import * as yup from "yup";

export const AddBoardgameSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  thumbnail: yup.string().required("Thumbnail is required"),
  // publisher: yup.string().required("Publisher is required"),
  // releaseYear: yup.number().required("Release Year is required").positive().integer(),
});

export type AddBoardgame = yup.InferType<typeof AddBoardgameSchema>;
