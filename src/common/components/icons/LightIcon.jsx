export const LightIcon = ({ fill = "#B3B5B7", ...props }) => {
  return (
    <>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <ellipse
          cx="19.8733"
          cy="19.4396"
          rx="19.428"
          ry="19.4396"
          fill="white"
        />
        <g filter="url(#filter0_i_663_30103)">
          <path
            d="M39.2776 19.5939C39.2776 30.4153 30.5103 39.1878 19.6954 39.1878C8.8805 39.1878 0.113281 30.4153 0.113281 19.5939C0.113281 8.77248 8.8805 0 19.6954 0C30.5103 0 39.2776 8.77248 39.2776 19.5939ZM1.20707 19.5939C1.20707 29.8108 9.48459 38.0933 19.6954 38.0933C29.9063 38.0933 38.1838 29.8108 38.1838 19.5939C38.1838 9.37693 29.9063 1.09445 19.6954 1.09445C9.48459 1.09445 1.20707 9.37693 1.20707 19.5939Z"
            fill="#E9EDED"
          />
        </g>
        <ellipse
          cx="19.7616"
          cy="19.3424"
          rx="14.3397"
          ry="14.194"
          fill={fill}
        />
        <defs>
          <filter
            id="filter0_i_663_30103"
            x="0.113281"
            y="0"
            width="39.1641"
            height="39.8517"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.6642" />
            <feGaussianBlur stdDeviation="0.415125" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_663_30103"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};
