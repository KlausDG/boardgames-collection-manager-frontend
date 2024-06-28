import { Controller } from "react-hook-form";

import { CardContainer } from "@/components";
import { ControlledTextField } from "@/components/form";
import { Autocomplete, Box, Button, Skeleton, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { useSleeveProductForm } from "../../hooks";

export const AddSleeveProductForm = () => {
  const { brands, categories, sizes, control, handleSubmit } = useSleeveProductForm();

  return (
    <CardContainer>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Add new Sleeve Product</Typography>
          <Button variant="contained" type="submit" size="small" disabled={false}>
            Register
          </Button>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: "12px" }}>
          <Grid xs={8}>
            <Controller
              name="brand"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  id="brand"
                  autoComplete
                  freeSolo
                  disableClearable
                  options={brands}
                  onChange={(_, value) => field.onChange(value)}
                  getOptionLabel={(option) => option}
                  isOptionEqualToValue={(option, value) => option === value}
                  onInputChange={(_, newInputValue) => field.onChange(newInputValue)}
                  renderInput={(params) => <TextField {...params} label="Brand Name" size="small" />}
                />
              )}
            />
          </Grid>
          <Grid xs={4}>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  id="category"
                  size="small"
                  autoComplete
                  disableClearable
                  options={categories || []}
                  getOptionLabel={(option) => option}
                  isOptionEqualToValue={(option, value) => option === value}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => <TextField {...params} label="Thickness" />}
                />
              )}
            />
          </Grid>

          <Grid xs={8}>
            {sizes.loading ? (
              <Skeleton height={56} />
            ) : (
              <Controller
                name="size"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    id="size"
                    autoComplete
                    freeSolo
                    disableClearable
                    options={sizes.values}
                    onChange={(_, value) => field.onChange(value)}
                    renderInput={(params) => <TextField {...params} label="Size" size="small" />}
                  />
                )}
              />
            )}
          </Grid>

          <Grid xs={4}>
            <ControlledTextField
              control={control}
              name="sleevesPerPack"
              label="Pack's Quantity"
              type="number"
              size="small"
              isLoading={false}
            />
          </Grid>
        </Grid>
      </Box>
    </CardContainer>
  );
};
