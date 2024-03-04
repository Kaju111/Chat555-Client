import { Dialog, DialogTitle, Stack } from "@mui/material";
import React from "react";

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  return (
    <Dialog open>
      <Stack>
        <DialogTitle>Add Member</DialogTitle>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
