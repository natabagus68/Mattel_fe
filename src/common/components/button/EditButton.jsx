import { EditIcon } from "../icons/index.js";

export const EditButton = ({
  onClick = () => {
    alert("Implement Edit data!!");
  },
}) => {
  return (
    <>
      <button onClick={onClick}>
        <EditIcon />
      </button>
    </>
  );
};
