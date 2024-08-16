import React from "react";

import { Box, Skeleton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

import { WeightRanges } from "../../types";

type BoardgameWeightTableProps = {
  data: WeightRanges;
};

export const BoardgameWeightTable = ({ data }: BoardgameWeightTableProps) => {
  return (
    <Box>
      <Typography variant="h6">Boardgames by weight</Typography>
      {!data ? (
        <Skeleton variant="text" />
      ) : (
        <Table size="small">
          <TableHead>
            <TableRow>
              {Object.keys(data).map((value) => (
                <TableCell key={value}>{value.replace("_", " - ")}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {Object.values(data).map((value) => (
                <TableCell key={value}>{value}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      )}
    </Box>
  );
};
