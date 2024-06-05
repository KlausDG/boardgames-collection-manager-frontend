import React, { useState } from "react";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { languages } from "@/utils/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { ControlledTextField, NameInput } from "../../components";
import { fetchGameById } from "../../repository";
import { AddBoardgame, AddBoardgameSchema } from "../../schema";

export const AddBoardGameFormSection = () => {
  const [name, setName] = useState("");
  const {
    control,
    watch,
    setValue,
    getValues,
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<AddBoardgame>({
    resolver: yupResolver(AddBoardgameSchema),
    defaultValues: {
      name: { id: "", value: "" },
      thumbnail: "",
      description: "",
      publishedYear: undefined,
      language: "English",
      minPlayers: undefined,
      maxPlayers: undefined,
      minPlaytime: undefined,
      maxPlaytime: undefined,
      purchasedValue: undefined,
      designers: [],
      publishers: [],
      inCollection: true,
      category: "Boardgame",
    },
  });
  const onSubmit: SubmitHandler<AddBoardgame> = async (data) => {
    try {
      const response = await fetch("/api/boardgames", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add boardgame");
      }

      console.log("Boardgame added successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGameData = async (id: number) => {
    const gameData = await fetchGameById(id);

    if (gameData) {
      setValue("thumbnail", gameData.thumbnail);
      setValue("description", gameData.description);
      setValue("publishedYear", gameData.yearPublished);
      setValue("minPlayers", gameData.minPlayers);
      setValue("maxPlayers", gameData.maxPlayers);
      setValue("minPlaytime", gameData.minPlaytime);
      setValue("maxPlaytime", gameData.maxPlaytime);
      setValue("designers", gameData.designers);
      setValue("publishers", gameData.publishers, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <NameInput control={control} setValue={setValue} error={errors?.name} />

      <Button
        variant="contained"
        disabled={!getValues("name")}
        onClick={() => fetchGameData(Number(getValues("name").id))}
      >
        Buscar no BGG
      </Button>

      <ControlledTextField control={control} name="thumbnail" label="Thumbnail" />
      <ControlledTextField control={control} name="description" label="Description" rows={4} />
      <ControlledTextField control={control} name="publishedYear" label="Published Year" />
      <ControlledTextField control={control} name="minPlayers" label="Min Players" />
      <ControlledTextField control={control} name="maxPlayers" label="Max Players" />
      <ControlledTextField control={control} name="minPlaytime" label="Min Playtime" />
      <ControlledTextField control={control} name="maxPlaytime" label="Max Playtime" />

      <Controller
        name="language"
        control={control}
        render={({ field }) => (
          <FormControl>
            <InputLabel id="languages-label">Languages</InputLabel>
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

      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked {...register("inCollection")} />} label="In Collection" />
      </FormGroup>

      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <FormControl>
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

      <ControlledTextField control={control} name="purchasedValue" label="Purchased Value" />

      {/* BGG Fields */}
      <TextField id="bestPlayerCount" label="Best Player Count" variant="outlined" />
      <TextField id="weight" label="Weight" variant="outlined" />
      <TextField id="bggRank" label="Bgg Rank" variant="outlined" />
      <TextField id="bggLink" label="Bgg Link" variant="outlined" />
      <Autocomplete
        multiple
        id="tags-outlined"
        options={[]}
        getOptionLabel={(option) => option.title}
        // defaultValue={}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label="Designers" placeholder="Favorites" />}
      />
    </Box>
  );
};
