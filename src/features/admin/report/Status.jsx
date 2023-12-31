export const Status = ({ text }) => {
  let cls = "";
  if (text === "Finished") {
    cls =
      "py-[9px] px-[12px] rounded-[8px] text-white-base w-fit font-normal text-base my-[9px] bg-success";
  } else if (text === "MTC" || text === "Closed") {
    cls =
      "py-[9px] px-[12px] rounded-[8px] text-white-lightest w-fit font-normal text-base my-[9px] bg-danger";
  } else if (text === "On Progress" || text === "Material") {
    cls =
      "py-[9px] px-[12px] rounded-[8px] text-white-lightest w-fit font-normal text-base my-[9px] bg-info";
  } else if (
    text === "Waiting" ||
    text === "QC" ||
    text === "Not Started" ||
    text === "On Hold"
  ) {
    cls =
      "py-[9px] px-[12px] rounded-[8px] text-black-500 w-fit font-normal text-base my-[9px] bg-warning";
  }
  return (
    <>
      <div className={cls}>{text}</div>
    </>
  );
};
