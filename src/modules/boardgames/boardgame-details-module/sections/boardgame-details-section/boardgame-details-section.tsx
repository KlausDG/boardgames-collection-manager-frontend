import React from "react";

import { Boardgame } from "@/interfaces";
import { Box, Link, Modal, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

type boardgameDetailsSetionProps = {
  boardgame: Boardgame | undefined;
  open: boolean;
  handleClose: () => void;
};

const style = {
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, 0)",
  // width: 600,
  bgcolor: "background.paper",
  border: "2px solid #f2f2f2",
  borderRadius: "10px",
  boxShadow: 24,
  pt: 4,
  px: 4,
  pb: 3,
};

const rowStyles = {
  borderRight: "1px solid #dedede18",
};

export const BoardgameDetailsSetion = ({ boardgame, open, handleClose }: boardgameDetailsSetionProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {boardgame && (
          <Grid container spacing={2}>
            <Grid xs={3}>
              <img src={boardgame?.thumbnail} alt={boardgame?.name} />
            </Grid>
            <Grid xs={9}>
              <Typography variant="h5">{boardgame?.name}</Typography>
              <Box marginTop={2}>
                <Grid container spacing={2} direction="row" justifyContent="space-around" alignItems="center">
                  <Grid xs={2} sx={rowStyles}>
                    <Typography variant="body1">Language</Typography>
                    <Typography variant="body2">{boardgame?.language}</Typography>
                  </Grid>
                  <Grid xs={4} sx={rowStyles}>
                    <Typography variant="body1">Players</Typography>
                    <Typography variant="body1">
                      {boardgame?.minPlayers} - {boardgame?.maxPlayers} Players (best {boardgame?.bestPlayerCount})
                    </Typography>
                  </Grid>
                  <Grid xs={2} sx={rowStyles}>
                    <Typography variant="body1">Playtime</Typography>
                    <Typography variant="body1">
                      {boardgame?.minPlaytime} - {boardgame?.maxPlaytime}
                    </Typography>
                  </Grid>
                  <Grid xs={2}>
                    <Typography variant="body1">Weight</Typography>
                    <Typography variant="body1">{boardgame?.weight}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid xs={12}>
              <Link href={boardgame?.bggLink} underline="hover" target="_blank">
                BGG RANK: {boardgame?.bggRank}
              </Link>
            </Grid>

            <Typography variant="body1">{boardgame?.purchasedValue}</Typography>
            <Typography variant="body1">{boardgame?.designers.map((item) => item.name).join(", ")}</Typography>
            <Typography variant="body1">{boardgame?.publisher.name}</Typography>
            {/* Adicionar expansões que estão na coleção */}
          </Grid>
        )}
      </Box>
    </Modal>
  );
};
