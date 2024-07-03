import React, { useState } from "react";

import { CardContainer } from "@/components";
import { Boardgame } from "@/interfaces";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Modal } from "@mui/material";

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

export const CreatePdfModule = ({ boardgames }: { boardgames: Array<Boardgame> }) => {
  const [players, setPlayers] = useState<number[]>([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { generateBoardgamePDF } = usePdf();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const valueNumber = parseInt(value, 10);
    setPlayers((prevSelectedPlayers) =>
      checked ? [...prevSelectedPlayers, valueNumber] : prevSelectedPlayers.filter((player) => player !== valueNumber)
    );
  };

  const handleSubmit = () => {
    generateBoardgamePDF(boardgames, players);

    handleClose();
    setPlayers([]);
  };

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
            {[...Array(7)].map((_, index) => {
              const playerCount = index + 1;
              return (
                <FormControlLabel
                  key={playerCount}
                  control={
                    <Checkbox
                      value={playerCount}
                      checked={players.includes(playerCount)}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label={playerCount}
                />
              );
            })}
          </FormGroup>
          <Box mt={2}>
            <h4>Selected Players: {players.join(", ")}</h4>
          </Box>
          <Button onClick={handleSubmit}>Generate</Button>
        </Box>
      </Modal>
    </CardContainer>
  );
};
