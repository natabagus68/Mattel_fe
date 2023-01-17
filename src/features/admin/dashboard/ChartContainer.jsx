export const ChartContainer = ({ children, title }) => {
  return (
    <div
      className={`mt-6 bg-[#FFFBFE] p-6 rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.04),0_2px_6px_2px_rgba(0,0,0,0.01)] `}
    >
      <div>{title}</div>
      <div className={`mt-[10px]`}>{children}</div>
    </div>
  );
};
