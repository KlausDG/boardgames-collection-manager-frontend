import { CardContainer } from "@/components";
import { ControlledTextField } from "@/components/form";
import { Box, Button, InputAdornment, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { useSleeveTypeForm } from "../../hooks";

export const AddSleeveTypeForm = () => {
  const { control, handleSubmit } = useSleeveTypeForm();

  return (
    <CardContainer>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Add new Sleeve Type</Typography>
          <Button variant="contained" type="submit" size="small" disabled={false}>
            Register
          </Button>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: "12px" }}>
          <Grid container>
            <Grid xs={12}>
              <ControlledTextField control={control} name="type" label="Type Name" isLoading={false} size="small" />
            </Grid>
            <Grid xs={6}>
              <ControlledTextField
                control={control}
                name="width"
                label="Width"
                type="number"
                size="small"
                isLoading={false}
                InputProps={{ endAdornment: <InputAdornment position="end">mm</InputAdornment> }}
              />
            </Grid>
            <Grid xs={6}>
              <ControlledTextField
                control={control}
                name="height"
                label="Height"
                type="number"
                size="small"
                isLoading={false}
                InputProps={{ endAdornment: <InputAdornment position="end">mm</InputAdornment> }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </CardContainer>
  );
};
