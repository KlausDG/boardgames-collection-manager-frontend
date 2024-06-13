import React from "react";

import { CardContainer } from "@/components";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { NameInput } from "../../components";
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
      <CardContainer>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <NameInput
            control={control}
            setFormValue={setValue}
            setNameObject={updateGameNameObject}
            error={errors?.name}
          />
        </Box>
      </CardContainer>
    </Grid>
  );
};
