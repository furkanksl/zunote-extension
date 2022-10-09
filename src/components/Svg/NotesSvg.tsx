import React from "react";

type SvgComponentProp = {
    function: any;
};

const NotesSvgComponent = (props: SvgComponentProp) => (
    <svg
        onClick={props.function}
        width="47"
        height="49"
        viewBox="0 0 47 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_d_1_28)">
            <path
                d="M40.8796 31.7503V5.77161C40.8796 4.91036 40.5411 4.08439 39.9387 3.47539C39.3362 2.8664 38.519 2.52427 37.667 2.52427H18.3914C17.5394 2.52427 16.7223 2.8664 16.1198 3.47539C15.5173 4.08439 15.1788 4.91036 15.1788 5.77161V24.7004C15.1789 25.133 15.2645 25.5612 15.4305 25.9599C15.5966 26.3587 15.8398 26.7198 16.1458 27.0222L23.2778 34.0722C23.878 34.6654 24.684 34.9976 25.5234 34.9977H37.667C38.519 34.9977 39.3362 34.6556 39.9387 34.0466C40.5411 33.4376 40.8796 32.6116 40.8796 31.7503Z"
                stroke="black"
                strokeWidth="4.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <g filter="url(#filter1_d_1_28)">
            <path
                d="M7.10039 12.5225L15.9035 36.058C16.1954 36.8383 16.7932 37.4736 17.5656 37.8242C18.338 38.1747 19.2217 38.2119 20.0222 37.9274L38.1317 31.492C38.9322 31.2076 39.584 30.6248 39.9437 29.8719C40.3033 29.1191 40.3415 28.2578 40.0496 27.4775L33.6354 10.3289C33.4888 9.937 33.2633 9.5776 32.9722 9.27182C32.681 8.96604 32.3302 8.72003 31.9402 8.54826L22.8507 4.54239C22.0858 4.20536 21.216 4.17351 20.4273 4.45366L9.01826 8.50797C8.21777 8.79243 7.566 9.3752 7.20633 10.1281C6.84665 10.8809 6.80855 11.7422 7.10039 12.5225V12.5225Z"
                fill="#FFC330"
                stroke="black"
                strokeWidth="4.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21.0913 4.21771L23.2921 10.1016C23.5839 10.8819 24.1818 11.5171 24.9542 11.8677C25.7266 12.2183 26.6102 12.2554 27.4107 11.971L33.4473 9.82585"
                fill="#FFC330"
            />
            <path
                d="M21.0913 4.21771L23.2921 10.1016C23.5839 10.8819 24.1818 11.5171 24.9542 11.8677C25.7266 12.2183 26.6102 12.2554 27.4107 11.971L33.4473 9.82585"
                stroke="black"
                strokeWidth="4.16667"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <filter
                id="filter0_d_1_28"
                x="9.09551"
                y="0.440933"
                width="37.8674"
                height="44.6401"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_28" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_28" result="shape" />
            </filter>
            <filter
                id="filter1_d_1_28"
                x="0.811691"
                y="2.19214"
                width="45.5266"
                height="45.9969"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_28" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_28" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default NotesSvgComponent;
