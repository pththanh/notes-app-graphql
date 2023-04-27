import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { CreateNewFolderOutlined } from "@mui/icons-material";

function NewFolder() {
  const [newFolderName, setNewFolderName] = useState();
  const [open, setOpen] = useState(false);

  const handleOpenPopup = () => {};
  const handleNewFolderChange = () => {};
  const handleClose = () => {};
  const handleOpen = () => {};

  return (
    <div>
      <Tooltip title="Add Folder" onClick={handleOpenPopup}>
        <IconButton size="small">
          <CreateNewFolderOutlined sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
      <Dialog open={open}>
        <DialogTitle>New Folder</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Folder Name"
            fullWidth
            size="small"
            variant="standard"
            sx={{ widht: "400px" }}
            autoComplete="off"
            value={newFolderName}
            onChange={handleNewFolderChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOpen}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewFolder;
