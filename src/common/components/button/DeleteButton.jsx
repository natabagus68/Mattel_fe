import { useState } from "react";
import { TrashIcon } from "../icons/index.js";
import { DeleteDialog } from "../dialog/index.js";

export const DeleteButton = ({
  onClick = () => {
    alert("Implement delete data");
  },
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <TrashIcon />
      </button>
      <DeleteDialog open={open} setOpen={setOpen} onClick={onClick} />
    </>
  );
};
