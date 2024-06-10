import React from "react";

import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { FormSectionContainer, NameInput } from "../../components";
import { useAddBoardgameForm } from "../../providers";

export const NameSearchSection = () => {
  const {
    control,
    setValue,
    updateGameNameObject,
    formState: { errors },
  } = useAddBoardgameForm();

  return (
    <Grid sm={12}>
      <FormSectionContainer>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <NameInput
            control={control}
            setFormValue={setValue}
            setNameObject={updateGameNameObject}
            error={errors?.name}
          />
        </Box>
      </FormSectionContainer>
    </Grid>
  );
};
