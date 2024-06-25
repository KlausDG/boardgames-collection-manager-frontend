import { CardContainer } from "@/components";
import { ControlledTextField } from "@/components/form";
import { Box, Button, InputAdornment, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { useSleeveSizeForm } from "../../hooks";

export const AddSleeveSizeForm = () => {
  const { control, handleSubmit } = useSleeveSizeForm();

  return (
    <CardContainer>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Add new Sleeve Size</Typography>
          <Button variant="contained" type="submit" size="small" disabled={false}>
            Register
          </Button>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: "12px" }}>
          <Grid container>
            <Grid xs={12}>
              <ControlledTextField control={control} name="name" label="Size Name" size="small" />
            </Grid>
            <Grid xs={6}>
              <ControlledTextField
                control={control}
                name="width"
                label="Width"
                type="number"
                size="small"
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
                InputProps={{ endAdornment: <InputAdornment position="end">mm</InputAdornment> }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </CardContainer>
  );
};
