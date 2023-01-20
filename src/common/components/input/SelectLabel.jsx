export const SelectLabel = ({
  name,
  label,
  list,
  value = "",
  onChange,
  placeholder = "Select",
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label
          htmlFor={name}
          className="uppercase font-medium text-[22px] text-gray-foundation-500"
        >
          {label}
        </label>
        <select
          className="border border-neutral-100 rounded-lg py-2 px-4 bg-white-lightest text-neutral-500"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder="Select"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {list.map((el, index) => (
            <option key={index} value={el.key}>
              {el.value}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
