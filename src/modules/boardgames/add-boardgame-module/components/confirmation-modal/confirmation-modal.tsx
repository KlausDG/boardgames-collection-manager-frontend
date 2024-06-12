import React from "react";

import { Box, Button, Modal, Typography } from "@mui/material";

type ConfirmationModalProps = {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #f2f2f2",
  borderRadius: "10px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const ConfirmationModal = ({ open, handleConfirm, handleClose }: ConfirmationModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="confirmation-modal-title"
      aria-describedby="confirmation-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h5" id="confirmation-modal-title">
          Boardgame added successfully
        </Typography>
        <Box marginY={4}>
          <p id="confirmation-modal-description">Would you like to add another one?</p>
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", gap: "16px" }}>
          <Button variant="contained" onClick={handleConfirm}>
            Yes
          </Button>
          <Button variant="contained" onClick={handleClose}>
            No
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
