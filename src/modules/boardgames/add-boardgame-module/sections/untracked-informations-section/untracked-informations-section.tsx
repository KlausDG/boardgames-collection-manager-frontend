import React from "react";

import { Controller } from "react-hook-form";

import { MoneyInput } from "@/components/form";
import { languages } from "@/utils/constants";
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { FormSectionContainer } from "../../components";
import { useAddBoardgameForm } from "../../providers";

export const UntrackedInformationsSection = () => {
  const { register, control } = useAddBoardgameForm();

  return (
    <FormSectionContainer>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Typography variant="h5">Untracked Informations</Typography>
        </Grid>
        <Grid xs={6}>
          <Controller
            name="language"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
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
            name="category"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
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

        <Grid xs={6}>
          <Controller
            name="purchasedValue"
            control={control}
            render={({ field }) => <MoneyInput label="Purchased Value" {...field} />}
          />
        </Grid>

        <Grid xs={6}>
          <FormControl fullWidth>
            <FormControlLabel
              control={<Checkbox defaultChecked {...register("inCollection")} />}
              label="In Collection"
            />
          </FormControl>
        </Grid>
      </Grid>
    </FormSectionContainer>
  );
};
