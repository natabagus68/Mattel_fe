export const InputLabel = ({
  name,
  placeholder,
  label,
  row = 0,
  value = "",
  onChange,
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="uppercase font-medium text-[22px] text-gray-foundation-500"
      >
        {label}
      </label>
      {row === 0 ? (
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          className="border border-neutral-100 rounded-lg py-2 px-4"
        />
      ) : (
        <textarea
          id={name}
          placeholder={placeholder}
          rows={row}
          className="border border-neutral-100 rounded-lg py-2 px-4"
        ></textarea>
      )}
    </div>
  );
};
