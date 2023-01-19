export const Status = ({ text }) => {
  let cls = "";
  if (text === "Available") {
    cls = `py-[9px] px-[12px] rounded-[8px] text-base w-fit font-normal 
         my-[9px] bg-success text-white-lightest`;
  } else if (text === "Busy")
    cls = `py-[9px] px-[12px] rounded-[8px] text-base w-fit font-normal 
         my-[9px] bg-danger text-white-lightest`;
  return (
    <>
      <p className={cls}>{text}</p>
    </>
  );
};
