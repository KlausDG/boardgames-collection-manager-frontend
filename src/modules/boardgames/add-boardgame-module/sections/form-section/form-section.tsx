import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

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
import { useAutocompleteInputQuery } from "../../hooks";
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
      language: "",
      minPlayers: undefined,
      maxPlayers: undefined,
      minPlaytime: undefined,
      maxPlaytime: undefined,
      designers: [],
      publishers: [],
    },
  });

  console.log(watch("name"));

  const autocompleteHandler = useAutocompleteInputQuery();

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
      // setValue("name", gameData.name);
      setValue("thumbnail", gameData.thumbnail, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
      trigger("thumbnail");
      setValue("description", gameData.description, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
      setValue("publishedYear", gameData.yearPublished, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
      setValue("minPlayers", gameData.minPlayers, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
      setValue("maxPlayers", gameData.maxPlayers, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
      setValue("minPlaytime", gameData.minPlaytime, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
      setValue("maxPlaytime", gameData.maxPlaytime, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
      setValue("designers", gameData.designers, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
      setValue("publishers", gameData.publishers, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <NameInput control={control} setValue={setValue} error={errors?.name} />
      {/* 
      <TextField
        id="teste"
        label="teste"
        variant="standard"
        value={name}
        inputMode="text"
        inputProps={{ value: name }}
      /> */}

      <Button
        variant="contained"
        disabled={!getValues("name")}
        onClick={() => fetchGameData(Number(getValues("name").id))}
      >
        Buscar no BGG
      </Button>

      <ControlledTextField control={control} name="thumbnail" label="Thumbnail" />
      <ControlledTextField control={control} name="description" label="Description" multiline rows={4} />
      <ControlledTextField control={control} name="publishedYear" label="Published Year" />
      <ControlledTextField control={control} name="minPlayers" label="Min Players" />
      <ControlledTextField control={control} name="maxPlayers" label="Max Players" />
      <ControlledTextField control={control} name="minPlaytime" label="Min Playtime" />
      <ControlledTextField control={control} name="maxPlaytime" label="Max Playtime" />

      <FormControl>
        <InputLabel id="category">Languages</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="language"
          value={languages[0]}
          label="Language"
          onChange={() => console.log("asda")}
        >
          {languages.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* <ControlledTextField control={control} name="language" label="Language" /> */}
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="In Collection" />
      </FormGroup>
      <FormControl fullWidth>
        <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={0}
          label="Age"
          onChange={() => console.log("asda")}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField id="purchasedValue" label="Purchased Value" variant="outlined" />

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
