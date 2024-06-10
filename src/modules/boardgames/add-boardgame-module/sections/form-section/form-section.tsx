import React from "react";

import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { useAddBoardgameForm } from "../../providers";
import { AditionalInformationsSection } from "../aditional-informations-section";
import { MainInformationSection } from "../main-informations-section";
import { NameSearchSection } from "../name-search-section";
import { UntrackedInformationsSection } from "../untracked-informations-section";

export const AddBoardGameFormSection = () => {
  const { handleSubmit, onSubmit, gameData, aditionalGameData } = useAddBoardgameForm();

  return (
    <Box display="flex" flexDirection="column" gap="64px">
      <Typography variant="h4">Add Boardgame</Typography>

      <Container disableGutters>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <NameSearchSection />
            <MainInformationSection />

            <Grid xs={6}>
              <AditionalInformationsSection />
              <UntrackedInformationsSection />
            </Grid>

            <Box paddingTop={2} paddingRight={1} width="100%" display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                type="submit"
                size="large"
                disabled={gameData.loading || aditionalGameData.loading}
              >
                Register Game
              </Button>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
