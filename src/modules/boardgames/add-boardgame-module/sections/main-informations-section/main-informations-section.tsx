import React from "react";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { ControlledTextField, DesignersInput, FormSectionContainer, PublisherInput } from "../../components";
import { useAddBoardgameForm } from "../../providers";

export const MainInformationSection = () => {
  const {
    publishers,
    control,
    designers,
    form: { loading },
  } = useAddBoardgameForm();

  return (
    <Grid sm={6}>
      <FormSectionContainer>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Typography variant="h5">Main Informations</Typography>
          </Grid>

          <Grid xs={6}>
            <ControlledTextField control={control} name="yearPublished" label="Published Year" isLoading={loading} />
          </Grid>
          <Grid xs={6}>
            <ControlledTextField control={control} name="thumbnail" label="Thumbnail" isLoading={loading} />
          </Grid>

          <Grid xs={6}>
            <DesignersInput control={control} options={designers.list} isLoading={loading} />
          </Grid>
          <Grid xs={6}>
            <PublisherInput control={control} options={publishers} isLoading={loading} />
          </Grid>
          <Grid xs={12}>
            <ControlledTextField
              control={control}
              name="description"
              label="Description"
              multiline
              rows={4.5}
              isLoading={loading}
              skeletonHeight={136.5}
            />
          </Grid>
          <Grid xs={3}>
            <ControlledTextField control={control} name="minPlayers" label="Min Players" isLoading={loading} />
          </Grid>
          <Grid xs={3}>
            <ControlledTextField control={control} name="maxPlayers" label="Max Players" isLoading={loading} />
          </Grid>
          <Grid xs={3}>
            <ControlledTextField control={control} name="minPlaytime" label="Min Playtime" isLoading={loading} />
          </Grid>
          <Grid xs={3}>
            <ControlledTextField control={control} name="maxPlaytime" label="Max Playtime" isLoading={loading} />
          </Grid>
        </Grid>
      </FormSectionContainer>
    </Grid>
  );
};
