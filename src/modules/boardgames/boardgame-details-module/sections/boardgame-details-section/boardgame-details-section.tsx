import React from "react";

import { Boardgame } from "@/interfaces";
import { Box, Modal, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { DesignersRow, InfoRow, PublisherRow, TitleRow } from "../../components";

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
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #f2f2f2",
  borderRadius: "10px",
  boxShadow: 24,
  pt: 4,
  px: 4,
  pb: 3,
};

export const BoardgameDetailsSetion = ({ boardgame, open, handleClose }: boardgameDetailsSetionProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <img src={boardgame?.thumbnail} alt={boardgame?.name} />
          </Grid>
          <Grid xs={9}>
            <TitleRow boardgame={boardgame} />

            <Typography variant="caption" color="GrayText" component="div">
              Purchased Value: R$ {boardgame?.purchasedValue}
            </Typography>

            <InfoRow boardgame={boardgame} />

            <DesignersRow boardgame={boardgame} />
            <PublisherRow boardgame={boardgame} />
          </Grid>

          {/* Adicionar expansões que estão na coleção */}
        </Grid>
      </Box>
    </Modal>
  );
};