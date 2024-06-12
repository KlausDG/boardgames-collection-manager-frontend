import { Control, Controller } from "react-hook-form";

import { Autocomplete, Chip, Skeleton, TextField } from "@mui/material";

import { AddBoardgame } from "../../schema";

type DesignersInputProps = {
  control: Control<AddBoardgame>;
  options: Array<string>;
  isLoading: boolean;
};

export const DesignersInput = ({ control, options, isLoading }: DesignersInputProps) => {
  return isLoading ? (
    <Skeleton animation="wave" height={56} />
  ) : (
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
            options={options}
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
              return tagValue.map((option, index) => <Chip {...getTagProps({ index })} key={option} label={option} />);
            }}
          />
        );
      }}
    />
  );
};
