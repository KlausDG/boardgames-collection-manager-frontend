import React, { useState } from "react";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { languages } from "@/utils/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { ControlledTextField, NameInput } from "../../components";
import { fetchGameById, scrapeAditionalData } from "../../repository";
import { fetchDesigners } from "../../repository/fetch-designers";
import { AddBoardgame, AddBoardgameSchema } from "../../schema";

export const AddBoardGameFormSection = () => {
  const [publishers, setPublishers] = useState([]);

  const {
    control,
    setValue,
    getValues,
    register,
    handleSubmit,
    watch,
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
      publisher: "",
      inCollection: true,
      category: "Boardgame",
      bestPlayersCount: "",
      rank: undefined,
      weight: undefined,
      link: "",
    },
  });

  console.log(watch("publisher"));

  const { data: designers = [], isLoading } = useQuery({
    queryKey: ["designers"],
    queryFn: fetchDesigners,
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
      setValue("publisher", gameData.publishers[0]);
      setPublishers(gameData.publishers);
    }
  };

  const fetchAditionalGameData = async (id: number) => {
    const gameData = await scrapeAditionalData(id);

    if (gameData) {
      setValue("bestPlayersCount", gameData.bestPlayersCount.join(", "));
      setValue("rank", gameData.rank);
      setValue("weight", gameData.weight);
      setValue("link", gameData.link);
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
        disabled={!watch("name").value}
        onClick={() => fetchGameData(Number(getValues("name").id))}
      >
        Buscar no BGG
      </Button>

      <ControlledTextField control={control} name="thumbnail" label="Thumbnail" />
      <ControlledTextField control={control} name="description" label="Description" rows={4} />
      <ControlledTextField control={control} name="publishedYear" label="Published Year" />

      <Controller
        name="designers"
        control={control}
        render={({ field }) => {
          return (
            <Autocomplete
              {...field}
              multiple
              autoComplete
              freeSolo
              id="designers"
              options={designers}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              isOptionEqualToValue={(option, value) => option === value}
              onChange={(_, value) => field.onChange(value)}
              renderInput={(params) => <TextField {...params} label="Designers" />}
              renderOption={(props, option) => {
                return (
                  <li {...props} key={option}>
                    {option}
                  </li>
                );
              }}
              renderTags={(tagValue, getTagProps) => {
                return tagValue.map((option, index) => (
                  <Chip {...getTagProps({ index })} key={option} label={option} />
                ));
              }}
            />
          );
        }}
      />

      <Controller
        name="publisher"
        control={control}
        render={({ field }) => (
          <Autocomplete
            {...field}
            id="publisher"
            autoComplete
            disableClearable
            options={publishers}
            getOptionLabel={(option) => option}
            isOptionEqualToValue={(option, value) => option === value}
            onChange={(_, value) => field.onChange(value)}
            renderInput={(params) => <TextField {...params} label="Publisher" />}
          />
        )}
      />

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

      <Button
        variant="contained"
        disabled={!getValues("name")}
        onClick={() => fetchAditionalGameData(Number(getValues("name").id))}
      >
        Buscar dados adicionais
      </Button>

      {/* BGG Fields */}
      <ControlledTextField control={control} name="bestPlayersCount" label="Best Player Count" />
      <ControlledTextField control={control} name="weight" label="Weight" />
      <ControlledTextField control={control} name="rank" label="Bgg Rank" />
      <ControlledTextField control={control} name="link" label="Bgg Link" />
    </Box>
  );
};
