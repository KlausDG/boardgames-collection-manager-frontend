import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";

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

import { NameInput } from "../../components";
import { useAutocompleteInputQuery } from "../../hooks";
import { AddBoardgame, AddBoardgameSchema } from "../../schema";

// type ResponseType = {
//   id: number;
//   name: string;
//   type: string;
// };

// const fetchOptions = async (value: string) => {
//   const response = await fetch(`http://localhost:3000/bgg/games/${value}`);
//   const data = await response.json();
//   return data.items.map((item: ResponseType) => item.name);
// };

export const AddBoardGameFormSection = () => {
  // const [boardgamesList, setBoardgamesList] = useState([]);
  const {
    control,
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddBoardgame>({
    resolver: yupResolver(AddBoardgameSchema),
  });

  console.log(watch("name"));

  const autocompleteHandler = useAutocompleteInputQuery();

  // const [inputValue, setInputValue] = useState("");
  // const [selectedValue, setSelectedValue] = useState<string | null>(null);

  // const debouncedInputValue = useDebounce(inputValue, 500);

  // const { data: options = [], isLoading } = useQuery({
  //   queryKey: ["options", debouncedInputValue],
  //   queryFn: () => fetchOptions(debouncedInputValue),
  //   enabled: !!debouncedInputValue && !selectedValue,
  // });

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

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <NameInput control={control} setValue={setValue} error={errors.name} />
      {/* <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Autocomplete
            {...field}
            onInputChange={(_, newInputValue) => {
              autocompleteHandler.updateInput(newInputValue);
            }}
            options={autocompleteHandler.options}
            loading={autocompleteHandler.isLoading}
            onChange={(_, newValue) => {
              autocompleteHandler.selectValue(newValue);
              if (newValue) {
                setValue("name", newValue);
              }
            }}
            renderInput={(params) => (
              <TextField {...params} label="Name" error={!!errors.name} helperText={errors.name?.message} />
            )}
          />
        )}
      /> */}

      <Button variant="contained">Buscar no BGG</Button>
      <TextField id="thumbnail" label="Thumbnail" variant="outlined" />
      <TextField id="description" label="Description" variant="outlined" multiline rows={4} />
      <TextField id="yearPublished" label="Year Published" variant="outlined" />
      <TextField id="language" label="Language" variant="outlined" />
      <TextField id="minPlayers" label="Min Players" variant="outlined" />
      <TextField id="maxPlayers" label="Max Players" variant="outlined" />
      <TextField id="minPlaytime" label="Min Playtime" variant="outlined" />
      <TextField id="maxPlaytime" label="Max Playtime" variant="outlined" />
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
