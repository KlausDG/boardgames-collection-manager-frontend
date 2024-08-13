"use client";
import "dayjs/locale/pt-br";

import Link from "next/link";

import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const drawerWidth = 240;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#161618",
            color: "#6A6970",
          },
        }}
      >
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Home", "Add Boardgame", "Edit Boardgame", "Remove Boardgame", "Add Sleeves", "Manage Sleeves"].map(
              (text) => (
                <Link href={`/${text.toLowerCase().replace(" ", "-")}`} key={text} passHref>
                  <ListItem>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              )
            )}
          </List>
        </Box>
      </Drawer>
      <Box component="main" width="100%" padding="24px">
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          {children}
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default Layout;
