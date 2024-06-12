"use client";
import Link from "next/link";

import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";

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
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
