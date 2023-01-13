export const ChartContainer = ({ children, title }) => {
  return (
    <div className="mt-6 bg-[#FFFBFE] p-6 rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.04),0_2px_6px_2px_rgba(0,0,0,0.01)] h-[268px]">
      <div className="flex justify-between">
        <div>{title}</div>
        <div>Optional</div>
      </div>
      <div className="h-[178px] mt-[10px]">{children}</div>
    </div>
  );
};
