import React from "react";

import { Controller } from "react-hook-form";

import { CardContainer } from "@/components";
import { MoneyInput } from "@/components/form";
import { languages } from "@/utils/constants";
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { useAddBoardgameForm } from "../../providers";

export const UntrackedInformationsSection = () => {
  const { register, control } = useAddBoardgameForm();

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
    </CardContainer>
  );
};
