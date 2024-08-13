import React, { useState } from "react";

import { CardContainer } from "@/components";
import { Box, Button, ButtonGroup, FormGroup, FormLabel, Modal } from "@mui/material";

import { usePdf } from "../../hooks";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CreatePdfModule = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { generateBoardgamePDF } = usePdf();

  return (
    <CardContainer>
      <Button onClick={handleOpen}>Generate PDF</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormLabel component="legend">Select Players Amount</FormLabel>
          <FormGroup row>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              {[...Array(7)].map((_, index) => {
                const playerCount = index + 1;
                return (
                  <Button key={playerCount} onClick={() => generateBoardgamePDF(playerCount)}>
                    {playerCount}
                  </Button>
                );
              })}
            </ButtonGroup>
          </FormGroup>
        </Box>
      </Modal>
    </CardContainer>
  );
};
