"use client";
import React from "react";

import { CardContainer } from "@/components";
import { Box, Skeleton, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

import { InfoCard } from "../../components";
import { useMonetaryReport, useWeightReport } from "../../hooks";

export const CollectionReports = () => {
  const { data } = useWeightReport();
  const { data: monetaryReportData } = useMonetaryReport();

  return (
    <CardContainer>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h6">Weight</Typography>
          <Stack direction="row" spacing={2}>
            <InfoCard title="Min" data={data?.min} shouldFormatData />
            <InfoCard title="Max" data={data?.max} shouldFormatData />
            <InfoCard title="Avg" data={data?.avg} shouldFormatData />
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6">Boardgames by weight</Typography>
          {!data ? (
            <Skeleton variant="text" />
          ) : (
            <Table size="small">
              <TableHead>
                <TableRow>
                  {!!data &&
                    Object.keys(data?.countInRange).map((value) => (
                      <TableCell key={value}>{value.replace("_", " - ")}</TableCell>
                    ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  {!!data &&
                    Object.values(data?.countInRange).map((value) => <TableCell key={value}>{value}</TableCell>)}
                </TableRow>
              </TableBody>
            </Table>
          )}
        </Box>
      </Stack>

      <Box>
        <Typography variant="h6">Monetary</Typography>
        <Stack direction="row" spacing={2}>
          <InfoCard title="Min" data={data?.min} shouldFormatData />
          <InfoCard title="Max" data={data?.max} shouldFormatData />
          <InfoCard title="Avg" data={data?.avg} shouldFormatData />
        </Stack>
      </Box>
    </CardContainer>
  );
};
