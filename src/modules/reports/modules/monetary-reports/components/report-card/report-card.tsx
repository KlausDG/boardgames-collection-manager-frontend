import React from "react";

import { Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

type ReportCardProps<T> = {
  title: string;
  headers: Array<string>;
  data: T;
  dataFormatter?: (value: number) => string | number;
};

export const ReportCard = <T extends Record<string, number>>({
  title,
  headers,
  data,
  dataFormatter = (value) => value,
}: ReportCardProps<T>) => {
  return (
    <Paper elevation={4}>
      <Box sx={{ padding: "16px 24px" }}>
        <Typography variant="caption">{title}</Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {Object.values(data).map((value, index) => (
                <TableCell key={index}>{dataFormatter(value)}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
};
