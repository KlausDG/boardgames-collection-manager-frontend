"use client";
import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { MoneyInput } from "@/components/form";
import { Boardgame } from "@/interfaces";
import { useFetchBoardgames } from "@/modules/boardgames/boardgames-table-module/hooks";
import { moneyFormatter } from "@/utils/helpers";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Autocomplete,
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

type BoardgameAutocompleteProps = {
  onSelect: (value: Boardgame) => void;
  selectedGames: Array<Boardgame>;
};

interface BoardgameWithPrice extends Boardgame {
  sellingPrice?: number;
}

const isBoardgameWithPrice = (item: Boardgame | BoardgameWithPrice): item is BoardgameWithPrice => {
  return (item as BoardgameWithPrice).sellingPrice !== undefined;
};

const BoardGameAutocomplete = ({ onSelect, selectedGames }: BoardgameAutocompleteProps) => {
  const [selectedValue, setSelectedValue] = useState({ name: "" } as Boardgame);
  const { data: boardgames = [], isLoading } = useFetchBoardgames({
    filters: [{ key: "category", value: "STANDALONE", isLinked: false }],
  });

  const filteredOptions = boardgames.filter((game) => !selectedGames.some((selected) => selected.id === game.id));

  return (
    <Autocomplete
      options={filteredOptions}
      getOptionLabel={(option) => option.name}
      loading={isLoading}
      onChange={(_, value) => {
        if (value) {
          onSelect(value);
        }
      }}
      value={selectedValue}
      onInputChange={(_, __, reason) => {
        if (reason === "reset") {
          setSelectedValue({ name: "" } as Boardgame);
        }
      }}
      isOptionEqualToValue={() => true}
      renderInput={(params) => <TextField {...params} label="Select Board Game" variant="outlined" />}
    />
  );
};

export const SalesForm = () => {
  const [plainText, setPlainText] = useState<string>("");

  const [selectedGames, setSelectedGames] = useState<Array<Boardgame>>([]);

  const { handleSubmit, unregister, register } = useForm();

  const onGameSelect = (selectedGame: Boardgame) => {
    const newSelectedGames = [...selectedGames, selectedGame];
    setSelectedGames(newSelectedGames);
  };

  const removeFromList = (gameId: number) => {
    const newSlectedGames = selectedGames.filter((game) => game.id !== gameId);
    setSelectedGames(newSlectedGames);
    unregister(`${gameId}`);
  };

  const onSubmit = (data: Record<string, number>) => {
    const games = selectedGames.map((game) => ({
      ...game,
      sellingPrice: data[game.id],
    }));

    const generatePlainText = (items: Array<Boardgame>, level: number = 0, includeValue: boolean = true): string => {
      return items
        .map((item) => {
          const indent = " ".repeat(level * 4);
          const haveExpansions = !!item.expansions?.length;
          const itemText = includeValue
            ? `-> ${item.name}: ${isBoardgameWithPrice(item) ? moneyFormatter(item.sellingPrice || 0) : "N/A"}${
                haveExpansions ? " - Acompanha as expansões:" : ""
              }`
            : `• ${item.name}`;
          const childrenText = item.expansions ? generatePlainText(item.expansions, level + 1, false) : "";
          return `${indent} ${itemText}\n${childrenText}`;
        })
        .join("");
    };

    const plainTextResult = generatePlainText(games);
    setPlainText(plainTextResult);
  };

  const formatPrices = (game: Boardgame) => {
    const expansionsPrices = game.expansions ? game.expansions.reduce((acc, item) => acc + item.purchasedPrice, 0) : 0;

    return moneyFormatter(game.purchasedPrice + expansionsPrices);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(plainText)
      .then(() => {
        alert("Texto copiado para a área de transferência!");
      })
      .catch((error) => {
        console.error("Falha ao copiar para a área de transferência:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="32px">
          <BoardGameAutocomplete
            selectedGames={selectedGames}
            onSelect={(selectedGame) => {
              onGameSelect(selectedGame);
            }}
          />

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Game</TableCell>
                  <TableCell align="right">Acquisition Price</TableCell>
                  <TableCell align="right">Sell Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedGames.map((game) => (
                  <TableRow key={game.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {game.name}
                    </TableCell>
                    <TableCell align="right">{formatPrices(game)}</TableCell>
                    <TableCell align="right">
                      <MoneyInput {...register(`${game.id}`, { required: true })} variant="standard" />
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <CloseIcon onClick={() => removeFromList(game.id)} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button type="submit">Submit</Button>

          <Typography component="div" variant="body2" sx={{ mt: 2 }}>
            <strong>Copy this text:</strong>
            <pre style={{ whiteSpace: "pre-wrap" }}>{plainText}</pre>
          </Typography>
          <IconButton onClick={copyToClipboard} aria-label="copy">
            <ContentCopyIcon />
          </IconButton>
        </Stack>
      </form>
    </div>
  );
};
