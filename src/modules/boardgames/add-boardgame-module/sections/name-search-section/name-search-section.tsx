import React from "react";

import { CardContainer } from "@/components";
import { ControlledTextField } from "@/components/form";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { NameInput } from "../../components";
import { useAddBoardgameForm } from "../../providers";

export const NameSearchSection = () => {
  const {
    control,
    setValue,
    updateGameNameObject,
    formState: { errors },
    form,
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
          <ControlledTextField control={control} name="bggId" label="Bgg ID" isLoading={form.loading} />
          <Button variant="contained" onClick={form.searchBggId}>
            Search
          </Button>
        </Box>
      </CardContainer>
    </Grid>
  );
};
