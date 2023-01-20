export const Checkbox = ({ width = 25, height = 25, checked = false }) => {
  return (
    <>
      <div
        className={`w-[${width}px] h-[${height}px] rounded-lg border border-sky-light  ${
          checked ? "bg-ink-base grid place-items-center" : "bg-white-lightest"
        }`}
      >
        {checked && (
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7077 4.59375L6.54622 11.7552L3.29102 8.5"
              stroke="white"
              strokeWidth="2.34375"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </>
  );
};
