import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Avatar, Box, Typography, Menu, MenuItem } from "@mui/material";

function UserMenu() {
  const {
    user: { displayName, photoURL, auth },
  } = useContext(AuthContext);

  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  const handleLogout = () => {
    auth.signOut();
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };
  return (
    <>
      <Box sx={{ display: "flex", cursor: "pointer" }} onClick={handleClick}>
        <Typography>{displayName}</Typography>
        <Avatar
          alt="avatar"
          src={photoURL}
          sx={{ width: 24, height: 24, marginLeft: "8px" }}
        />
      </Box>
      <Menu id="basic-menu" anchorEl={anchor} open={open} onClose={handleClose}>
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </Menu>
    </>
  );
}

export default UserMenu;
