import React from "react";

import { moneyFormatter } from "@/utils/helpers";
import { Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

import { MonetaryReportDataFields } from "../../types";

type ReportCardProps = {
  title: string;
  data: MonetaryReportDataFields;
};

export const ReportCard = ({ title, data }: ReportCardProps) => {
  return (
    <Paper elevation={4}>
      <Box sx={{ padding: "16px 24px" }}>
        <Typography variant="caption">{title}</Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Sum</TableCell>
              <TableCell>Avg</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {Object.values(data).map((value, index) => (
                <TableCell key={index}>{moneyFormatter(value)}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
};
