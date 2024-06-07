import React from "react";

import { Controller } from "react-hook-form";

import { MoneyInput } from "@/components/form";
import { languages } from "@/utils/constants";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { ControlledTextField, DesignersInput, NameInput, PublisherInput } from "../../components";
import { useCreateBoardgameForm } from "../../hooks";

export const AddBoardGameFormSection = () => {
  const {
    handleSubmit,
    onSubmit,
    register,
    publishers,
    control,
    setValue,
    getValues,
    designers,
    gameData,
    aditionalGameData,
    gameNameObject,
    updateGameNameObject,
    formState: { errors },
  } = useCreateBoardgameForm();

  return (
    <Box display="flex" flexDirection="column" gap="64px">
      <Typography variant="h4">Add Boardgame</Typography>

      <Container disableGutters>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid sm={12}>
              <Paper elevation={8} sx={{ padding: "16px", borderRadius: "12px" }}>
                <Box sx={{ display: "flex", gap: "8px" }}>
                  <NameInput
                    control={control}
                    setFormValue={setValue}
                    setNameObject={updateGameNameObject}
                    error={errors?.name}
                  />
                </Box>
              </Paper>
            </Grid>

            <Grid sm={6}>
              <Paper elevation={8} sx={{ padding: "16px", borderRadius: "12px" }}>
                <Grid container spacing={2}>
                  <Grid xs={9}>
                    <Typography variant="h5"> BGG Fields</Typography>
                  </Grid>
                  <Grid xs={3}>
                    <Button
                      variant="contained"
                      disabled={!gameNameObject.value}
                      onClick={() => gameData.fetch()}
                      fullWidth
                      size="small"
                    >
                      Search data
                    </Button>
                  </Grid>
                  <Grid xs={6}>
                    <Box sx={{ width: "100%" }}>
                      <ControlledTextField
                        control={control}
                        name="yearPublished"
                        label="Published Year"
                        isLoading={gameData.loading}
                      />
                    </Box>
                  </Grid>
                  <Grid xs={6}>
                    <ControlledTextField
                      control={control}
                      name="thumbnail"
                      label="Thumbnail"
                      isLoading={gameData.loading}
                    />
                  </Grid>

                  <Grid xs={6}>
                    <DesignersInput control={control} options={designers.list} isLoading={gameData.loading} />
                  </Grid>
                  <Grid xs={6}>
                    <PublisherInput control={control} options={publishers} isLoading={gameData.loading} />
                  </Grid>
                  <Grid xs={12}>
                    <ControlledTextField
                      control={control}
                      name="description"
                      label="Description"
                      multiline
                      rows={4.5}
                      isLoading={gameData.loading}
                      skeletonHeight={136.5}
                    />
                  </Grid>
                  <Grid xs={3}>
                    <ControlledTextField
                      control={control}
                      name="minPlayers"
                      label="Min Players"
                      isLoading={gameData.loading}
                    />
                  </Grid>
                  <Grid xs={3}>
                    <ControlledTextField
                      control={control}
                      name="maxPlayers"
                      label="Max Players"
                      isLoading={gameData.loading}
                    />
                  </Grid>
                  <Grid xs={3}>
                    <ControlledTextField
                      control={control}
                      name="minPlaytime"
                      label="Min Playtime"
                      isLoading={gameData.loading}
                    />
                  </Grid>
                  <Grid xs={3}>
                    <ControlledTextField
                      control={control}
                      name="maxPlaytime"
                      label="Max Playtime"
                      isLoading={gameData.loading}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid xs={6}>
              <Paper elevation={8} sx={{ padding: "16px", borderRadius: "12px", marginBottom: "17px" }}>
                <Grid container spacing={2}>
                  <Grid xs={9}>
                    <Typography variant="h5"> BGG Aditional Fields</Typography>
                  </Grid>
                  <Grid xs={3}>
                    <Button
                      variant="contained"
                      disabled={!getValues("name") || aditionalGameData.loading}
                      onClick={() => aditionalGameData.fetch()}
                      size="small"
                      fullWidth
                    >
                      Search data
                    </Button>
                  </Grid>
                  <Grid xs={4}>
                    <ControlledTextField
                      control={control}
                      name="bestPlayerCount"
                      label="Best Player Count"
                      isLoading={aditionalGameData.loading}
                    />
                  </Grid>
                  <Grid xs={4}>
                    <ControlledTextField
                      control={control}
                      name="weight"
                      label="Weight"
                      isLoading={aditionalGameData.loading}
                    />
                  </Grid>
                  <Grid xs={4}>
                    <ControlledTextField
                      control={control}
                      name="bggRank"
                      label="Bgg Rank"
                      isLoading={aditionalGameData.loading}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <ControlledTextField
                      control={control}
                      name="bggLink"
                      label="Bgg Link"
                      isLoading={aditionalGameData.loading}
                    />
                  </Grid>
                </Grid>
              </Paper>
              <Paper elevation={8} sx={{ padding: "16px", borderRadius: "12px" }}>
                <Grid container spacing={2}>
                  <Grid xs={12}>
                    <Typography variant="h5">Untracked Fields</Typography>
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
              </Paper>
            </Grid>

            <Box paddingTop={2} paddingRight={1} width="100%" display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                type="submit"
                size="large"
                disabled={gameData.loading || aditionalGameData.loading}
              >
                Register Game
              </Button>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
