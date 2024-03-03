import React, { useState } from "react";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { grop, matBlack } from "../constants/color";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Groups = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState();

  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <Tooltip title="menu">
          <IconButton onClick={handleMobile}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        sm={4}
        bgcolor={grop}
      >
        <GroupList />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}
      </Grid>

      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupList w={"50vw"} />
      </Drawer>
    </Grid>
  );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  <Stack>
    {myGroups.length > 0 ? (
      myGroups.map((grop) => {})
    ) : (
      <Typography textAlign={"center"} padding="1rem">
        No groups
      </Typography>
    )}
  </Stack>;
};

export default Groups;
