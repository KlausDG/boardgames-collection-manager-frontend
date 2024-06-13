import React from "react";

import { CardContainer } from "@/components";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { ControlledTextField } from "../../components";
import { useAddBoardgameForm } from "../../providers";

export const AditionalInformationsSection = () => {
  const {
    control,
    form: { loading },
  } = useAddBoardgameForm();

  return (
    <CardContainer sx={{ marginBottom: "17px" }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Typography variant="h5"> Aditional Informations</Typography>
        </Grid>

        <Grid xs={4}>
          <ControlledTextField control={control} name="bestPlayerCount" label="Best Player Count" isLoading={loading} />
        </Grid>
        <Grid xs={4}>
          <ControlledTextField control={control} name="weight" label="Weight" isLoading={loading} />
        </Grid>
        <Grid xs={4}>
          <ControlledTextField control={control} name="bggRank" label="Bgg Rank" isLoading={loading} />
        </Grid>
        <Grid xs={12}>
          <ControlledTextField control={control} name="bggLink" label="Bgg Link" isLoading={loading} />
        </Grid>
      </Grid>
    </CardContainer>
  );
};
