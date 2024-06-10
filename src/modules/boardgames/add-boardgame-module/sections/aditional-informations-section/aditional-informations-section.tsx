import React from "react";

import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { ControlledTextField, FormSectionContainer } from "../../components";
import { useAddBoardgameForm } from "../../providers";

export const AditionalInformationsSection = () => {
  const { control, getValues, aditionalGameData } = useAddBoardgameForm();

  return (
    <FormSectionContainer sx={{ marginBottom: "17px" }}>
      <Grid container spacing={2}>
        <Grid xs={9}>
          <Typography variant="h5"> Aditional Informations</Typography>
        </Grid>
        <Grid xs={3}>
          <Button
            variant="contained"
            disabled={!getValues("name") || aditionalGameData.loading}
            onClick={() => aditionalGameData.fetch()}
            size="small"
            fullWidth
          >
            Search data
          </Button>
        </Grid>
        <Grid xs={4}>
          <ControlledTextField
            control={control}
            name="bestPlayerCount"
            label="Best Player Count"
            isLoading={aditionalGameData.loading}
          />
        </Grid>
        <Grid xs={4}>
          <ControlledTextField control={control} name="weight" label="Weight" isLoading={aditionalGameData.loading} />
        </Grid>
        <Grid xs={4}>
          <ControlledTextField
            control={control}
            name="bggRank"
            label="Bgg Rank"
            isLoading={aditionalGameData.loading}
          />
        </Grid>
        <Grid xs={12}>
          <ControlledTextField
            control={control}
            name="bggLink"
            label="Bgg Link"
            isLoading={aditionalGameData.loading}
          />
        </Grid>
      </Grid>
    </FormSectionContainer>
  );
};
