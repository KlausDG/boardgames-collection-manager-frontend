import React from "react";

import { Boardgame } from "@/interfaces";
import { Box, Grid, Skeleton, Typography } from "@mui/material";

type InfoRowProps = {
  boardgame: Boardgame | undefined;
};

export const InfoRow = ({ boardgame }: InfoRowProps) => {
  const rowStyles = {
    borderRight: "1px solid #dedede18",
  };

  return (
    <Box marginY={1}>
      {!boardgame ? (
        <Skeleton animation="wave" height={56} />
      ) : (
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Grid xs={2} sx={rowStyles}>
            <Typography variant="body2" color="GrayText">
              {boardgame.language}
            </Typography>
          </Grid>
          <Grid xs={4} sx={rowStyles}>
            <Typography variant="body2" color="GrayText">
              {boardgame.minPlayers} - {boardgame.maxPlayers} players{" "}
              <Typography variant="caption" color="GrayText">
                ( best {boardgame.bestPlayerCount.join(", ")} )
              </Typography>
            </Typography>
          </Grid>
          <Grid xs={2} sx={rowStyles}>
            <Typography variant="body2" color="GrayText">
              {boardgame.minPlaytime} - {boardgame.maxPlaytime} min
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography variant="body2" color="GrayText">
              {boardgame.weight} weight
            </Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
