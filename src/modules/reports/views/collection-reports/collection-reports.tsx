import React from "react";

import { CardContainer } from "@/components";
import { Box, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

import { InfoCard } from "../../components";
import { useWeightReport } from "../../hooks";

export const CollectionReports = () => {
  const { data } = useWeightReport();

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
          <Table size="small">
            <TableHead>
              <TableRow>
                {!!data &&
                  Object.keys(data?.countInRange).map((value) => <TableCell>{value.replace("_", " - ")}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {!!data && Object.values(data?.countInRange).map((value) => <TableCell>{value}</TableCell>)}
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Stack>
    </CardContainer>
  );
};
