import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "../../constants/color";
import {
  Add as AddIcons,
  Menu as MenuIcon,
  Search as SearchIcons,
  Group as GroupIcons,
} from "@mui/icons-material";

const Header = () => {
  const handleMobile = () => {
    console.log("HO geya");
  };

  const openSearchDialog = () => {
    console.log("HO geya openSearchDialog");
  };

  const openNewGroup = () => {
    console.log("HO geya openNewGroup");
  };

  const navigateToGroup = () => {
    console.log("HO geya openNewGroup");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chat 555
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Tooltip title="Search">
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={openSearchDialog}
                >
                  <SearchIcons />
                </IconButton>
              </Tooltip>
              <Tooltip title="New Group">
                <IconButton color="inherit" size="large" onClick={openNewGroup}>
                  <AddIcons />
                </IconButton>
              </Tooltip>
              <Tooltip title="Manage Groups">
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={navigateToGroup}
                >
                  <GroupIcons />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
