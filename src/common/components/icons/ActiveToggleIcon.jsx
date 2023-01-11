export const ActiveToggleIcon = (props) => {
  return (
    <>
      <svg
        width="40"
        height="36"
        viewBox="0 0 40 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="6" width="32" height="20" rx="10" fill="#617E8C" />
        <g filter="url(#filter0_dd_1359_2419)">
          <circle cx="22" cy="16" r="8" fill="#F6F6F6" />
        </g>
        <defs>
          <filter
            id="filter0_dd_1359_2419"
            x="4"
            y="0"
            width="36"
            height="36"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1359_2419"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1359_2419"
              result="effect2_dropShadow_1359_2419"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1359_2419"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};
