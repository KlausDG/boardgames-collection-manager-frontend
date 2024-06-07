import React from "react";

import { Controller } from "react-hook-form";

import { languages } from "@/utils/constants";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { ControlledTextField, NameInput } from "../../components";
import { useCreateBoardgameForm } from "../../hooks";

export const AddBoardGameFormSection = () => {
  // const [publishers, setPublishers] = useState([]);
  // const [gameNameObject, setGameNameObject] = useState({ id: "", value: "" });

  // const {
  //   control,
  //   setValue,
  //   getValues,
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<AddBoardgame>({
  //   resolver: yupResolver(AddBoardgameSchema),
  //   defaultValues: {
  //     name: "",
  //     thumbnail: "",
  //     description: "",
  //     yearPublished: undefined,
  //     language: "English",
  //     minPlayers: undefined,
  //     maxPlayers: undefined,
  //     minPlaytime: undefined,
  //     maxPlaytime: undefined,
  //     purchasedValue: undefined,
  //     designers: [],
  //     publisher: "",
  //     inCollection: true,
  //     category: "Boardgame",
  //     bestPlayerCount: "",
  //     bggRank: undefined,
  //     weight: undefined,
  //     bggLink: "",
  //   },
  // });

  const styles = {
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
  };

  // const { data: designers = [], isLoading } = useQuery({
  //   queryKey: ["designers"],
  //   queryFn: fetchDesigners,
  // });

  // const queryClient = useQueryClient();

  // const mutation = useMutation<AddBoardgame, Error, AddBoardgame>({
  //   mutationFn: registerGame,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["boardgames"] });
  //   },
  // });

  // const onSubmit: SubmitHandler<AddBoardgame> = async (data) => {
  //   try {
  //     console.log(data);
  //     await mutation.mutateAsync(data);

  //     console.log("Boardgame added successfully");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const { refetch: fetchGameData, isLoading: isFetchingGameData } = useQuery({
  //   queryKey: ["gameData"],
  //   queryFn: async () => {
  //     const gameData = await fetchGameById(gameNameObject.id);
  //     if (gameData) {
  //       setValue("thumbnail", gameData.thumbnail);
  //       setValue("description", gameData.description);
  //       setValue("yearPublished", gameData.yearPublished);
  //       setValue("minPlayers", gameData.minPlayers);
  //       setValue("maxPlayers", gameData.maxPlayers);
  //       setValue("minPlaytime", gameData.minPlaytime);
  //       setValue("maxPlaytime", gameData.maxPlaytime);
  //       setValue("designers", gameData.designers);
  //       setValue("publisher", gameData.publishers[0]);
  //       setPublishers(gameData.publishers);
  //     }

  //     return gameData;
  //   },
  //   enabled: false,
  // });

  // const fetchAditionalGameData = async (id: number) => {
  //   const gameData = await scrapeAditionalData(id);

  //   if (gameData) {
  //     setValue("bestPlayerCount", gameData.bestPlayersCount.join(", "));
  //     setValue("bggRank", gameData.rank);
  //     setValue("weight", gameData.weight);
  //     setValue("bggLink", gameData.link);
  //   }
  // };

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
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <NameInput control={control} setFormValue={setValue} setNameObject={updateGameNameObject} error={errors?.name} />

      <Button variant="contained" disabled={!gameNameObject.value} onClick={() => gameData.fetch()}>
        Buscar no BGG
      </Button>

      <ControlledTextField control={control} name="thumbnail" label="Thumbnail" isLoading={gameData.loading} />
      <ControlledTextField
        control={control}
        name="description"
        label="Description"
        rows={4}
        isLoading={gameData.loading}
      />
      <ControlledTextField control={control} name="yearPublished" label="Published Year" isLoading={gameData.loading} />

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
              options={designers.list}
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

      <ControlledTextField
        control={control}
        name="purchasedValue"
        label="Purchased Value"
        type="number"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
          sx: styles,
        }}
      />

      <Button variant="contained" disabled={!getValues("name")} onClick={() => aditionalGameData.fetch()}>
        Buscar dados adicionais
      </Button>

      {/* BGG Fields */}
      <ControlledTextField control={control} name="bestPlayerCount" label="Best Player Count" />
      <ControlledTextField control={control} name="weight" label="Weight" />
      <ControlledTextField control={control} name="bggRank" label="Bgg Rank" />
      <ControlledTextField control={control} name="bggLink" label="Bgg Link" />

      <Button variant="contained" type="submit">
        Cadastrar jogo
      </Button>
    </Box>
  );
};
