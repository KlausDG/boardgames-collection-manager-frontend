import React from "react";

import { Controller } from "react-hook-form";

import { CardContainer } from "@/components";
import { MoneyInput } from "@/components/form";
import { languageDependences, languages } from "@/utils/constants";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { useAddBoardgameForm } from "../../providers";

export const UntrackedInformationsSection = () => {
  const { control } = useAddBoardgameForm();

  return (
    <CardContainer>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Controller
            name="language"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth size="small">
                <InputLabel id="languages-label">Language</InputLabel>
                <Select id="language" {...field}>
                  {languages.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>

        <Grid xs={6}>
          <Controller
            name="languageDependence"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth size="small">
                <InputLabel id="languageDependence-label">Language Dependence</InputLabel>
                <Select id="languageDependence" {...field}>
                  {languageDependences.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>

        <Grid xs={6}>
          <Controller
            name="purchasedPrice"
            control={control}
            render={({ field }) => <MoneyInput label="Purchased Price" {...field} />}
          />
        </Grid>

        <Grid xs={6}>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth size="small">
                <InputLabel id="category-label">Category</InputLabel>
                <Select id="category" {...field}>
                  {["Boardgame", "Expansion"].map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>
      </Grid>
    </CardContainer>
  );
};
