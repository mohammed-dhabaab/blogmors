import styles from "../styles";
import { logo } from "../constants";
import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

// import { logoImg } from "../assets";

const Logo = ({ className, size, ...props }) => {
  // const heightScaleFactor = 1452 / 1204; // Calculate the aspect ratio
  // const width = size;
  // const height = width * heightScaleFactor;
  return (
    // <div>
    //   <svg
    //     width={width || "1204"}
    //     height={height || "1452"}
    //     viewBox="0 0 1204 1452"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <g filter="url(#filter0_d_307_23)">
    //       <path
    //         d="M338.8 662.2C368.133 663.8 395.867 673.667 422 691.8C448.133 709.4 469.2 731.533 485.2 758.2C501.2 784.333 509.2 810.467 509.2 836.6C509.2 911.267 480.667 968.067 423.6 1007C366.533 1045.93 287.067 1065.4 185.2 1065.4L168.4 1064.6C166.8 1072.07 166 1078.47 166 1083.8C164.4 1090.2 161.467 1095.53 157.2 1099.8C152.933 1104.6 148.4 1107 143.6 1107C134.533 1107 129.467 1101.67 128.4 1091C129.467 1080.33 131.333 1069.67 134 1059L110.8 1054.2C90 1050.47 76.4 1046.2 70 1041.4C63.6 1036.07 60.4 1029.67 60.4 1022.2C60.4 1019 62 1015.8 65.2 1012.6C68.4 1008.87 71.3333 1007 74 1007C75.6 1007 81.2 1008.6 90.8 1011.8C100.933 1015 109.733 1017.67 117.2 1019.8C124.133 1021.4 132.4 1022.2 142 1022.2L219.6 684.6L195.6 683.8C187.6 683.8 183.6 679.267 183.6 670.2C183.6 657.4 198 651 226.8 651C235.867 613.667 244.933 567.267 254 511.8C259.867 473.933 265.467 441.667 270.8 415C276.667 388.333 284.133 361.133 293.2 333.4C288.4 335.533 280.4 341.133 269.2 350.2C265.467 353.933 261.467 357.4 257.2 360.6C252.933 363.267 249.2 364.6 246 364.6C242.8 364.6 239.6 363.267 236.4 360.6C233.733 357.933 232.4 353.933 232.4 348.6C232.4 336.867 239.867 326.2 254.8 316.6C269.733 307 287.867 300.067 309.2 295.8C312.4 290.467 316.4 287.8 321.2 287.8C325.467 287.8 329.733 289.933 334 294.2C383.6 295.8 423.333 312.867 453.2 345.4C483.067 377.933 498 421.133 498 475C498 503.8 490.267 532.067 474.8 559.8C459.867 587 440.133 609.933 415.6 628.6C391.067 647.267 365.467 658.467 338.8 662.2ZM326 328.6C316.933 359 309.733 388.067 304.4 415.8C299.067 443.533 293.2 477.133 286.8 516.6C285.2 524.6 282 542.467 277.2 570.2C272.933 597.4 267.867 624.067 262 650.2C297.733 650.2 330.533 642.467 360.4 627C390.8 611 414.8 589.667 432.4 563C450 536.333 458.8 507.267 458.8 475.8C458.8 428.867 446.8 392.867 422.8 367.8C398.8 342.733 366.533 329.667 326 328.6ZM206.8 1029.4C262.8 1029.4 310.533 1021.93 350 1007C390 991.533 420.4 969.667 441.2 941.4C462 913.133 472.4 879.8 472.4 841.4C472.4 815.267 463.867 790.467 446.8 767C430.267 743 408.4 723.8 381.2 709.4C354 695 325.733 687.8 296.4 687.8C279.333 687.8 265.2 687.267 254 686.2C245.467 723.533 232.4 780.867 214.8 858.2C197.2 935 184.133 991.533 175.6 1027.8C185.2 1028.87 195.6 1029.4 206.8 1029.4Z"
    //         fill="#00DEFF"
    //       />
    //     </g>
    //     <g filter="url(#filter1_d_307_23)">
    //       <path
    //         d="M1035.4 1427.6C1028.47 1427.6 1023.93 1424.67 1021.8 1418.8C1019.67 1412.93 1018.6 1402 1018.6 1386V1351.6C1018.6 1308.4 1022.33 1191.33 1029.8 1000.4C1030.87 957.2 1032.2 914.8 1033.8 873.2C1035.4 831.6 1036.47 797.467 1037 770.8C1014.07 822 978.867 893.2 931.4 984.4C884.467 1075.6 855.933 1130.8 845.8 1150C822.333 1194.27 798.6 1239.87 774.6 1286.8C769.267 1298 762.6 1303.6 754.6 1303.6C747.133 1303.6 741.8 1299.87 738.6 1292.4L709.8 1159.6C661.267 942.533 631.4 806.533 620.2 751.6C607.933 813.467 595.133 872.667 581.8 929.2C569 985.2 552.467 1054.8 532.2 1138C524.733 1169.47 515.667 1207.6 505 1252.4C494.333 1297.2 482.067 1350 468.2 1410.8C462.333 1421.47 454.867 1426.8 445.8 1426.8C437.8 1426.8 433.267 1421.47 432.2 1410.8C441.267 1360.67 454.067 1298.8 470.6 1225.2C487.133 1151.6 503.667 1080.13 520.2 1010.8C536.733 940.933 547.667 894.267 553 870.8L601.8 663.6C603.4 658.267 606.333 653.733 610.6 650C615.4 646.267 619.933 644.4 624.2 644.4C631.133 644.4 635.933 648.933 638.6 658C647.667 697.467 669.533 796.933 704.2 956.4C725 1060.4 743.933 1147.87 761 1218.8C786.067 1176.13 817 1119.07 853.8 1047.6C890.6 976.133 940.2 878.8 1002.6 755.6C1018.6 722.533 1034.07 691.6 1049 662.8C1055.4 650 1063.13 643.6 1072.2 643.6C1080.73 643.6 1085 647.6 1085 655.6L1083.4 677.2C1068.47 931.067 1059.93 1168.13 1057.8 1388.4C1059.4 1390.53 1060.2 1393.47 1060.2 1397.2C1060.2 1404.13 1057.53 1411.07 1052.2 1418C1047.4 1424.4 1041.8 1427.6 1035.4 1427.6Z"
    //         fill="#00DEFF"
    //       />
    //     </g>
    //     <g filter="url(#filter2_d_307_23)">
    //       <rect y="1132" width="1180" height="41" rx="20.5" fill="#00DEFF" />
    //     </g>
    //     <defs>
    //       <filter
    //         id="filter0_d_307_23"
    //         x="60.3999"
    //         y="287.8"
    //         width="472.8"
    //         height="843.2"
    //         filterUnits="userSpaceOnUse"
    //         color-interpolation-filters="sRGB"
    //       >
    //         <feFlood flood-opacity="0" result="BackgroundImageFix" />
    //         <feColorMatrix
    //           in="SourceAlpha"
    //           type="matrix"
    //           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //           result="hardAlpha"
    //         />
    //         <feOffset dx="24" dy="24" />
    //         <feComposite in2="hardAlpha" operator="out" />
    //         <feColorMatrix
    //           type="matrix"
    //           values="0 0 0 0 0 0 0 0 0 0.870588 0 0 0 0 1 0 0 0 0.5 0"
    //         />
    //         <feBlend
    //           mode="normal"
    //           in2="BackgroundImageFix"
    //           result="effect1_dropShadow_307_23"
    //         />
    //         <feBlend
    //           mode="normal"
    //           in="SourceGraphic"
    //           in2="effect1_dropShadow_307_23"
    //           result="shape"
    //         />
    //       </filter>
    //       <filter
    //         id="filter1_d_307_23"
    //         x="432.2"
    //         y="643.6"
    //         width="676.8"
    //         height="808"
    //         filterUnits="userSpaceOnUse"
    //         color-interpolation-filters="sRGB"
    //       >
    //         <feFlood flood-opacity="0" result="BackgroundImageFix" />
    //         <feColorMatrix
    //           in="SourceAlpha"
    //           type="matrix"
    //           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //           result="hardAlpha"
    //         />
    //         <feOffset dx="24" dy="24" />
    //         <feComposite in2="hardAlpha" operator="out" />
    //         <feColorMatrix
    //           type="matrix"
    //           values="0 0 0 0 0 0 0 0 0 0.870588 0 0 0 0 1 0 0 0 0.5 0"
    //         />
    //         <feBlend
    //           mode="normal"
    //           in2="BackgroundImageFix"
    //           result="effect1_dropShadow_307_23"
    //         />
    //         <feBlend
    //           mode="normal"
    //           in="SourceGraphic"
    //           in2="effect1_dropShadow_307_23"
    //           result="shape"
    //         />
    //       </filter>
    //       <filter
    //         id="filter2_d_307_23"
    //         x="0"
    //         y="1132"
    //         width="1204"
    //         height="65"
    //         filterUnits="userSpaceOnUse"
    //         color-interpolation-filters="sRGB"
    //       >
    //         <feFlood flood-opacity="0" result="BackgroundImageFix" />
    //         <feColorMatrix
    //           in="SourceAlpha"
    //           type="matrix"
    //           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //           result="hardAlpha"
    //         />
    //         <feOffset dx="24" dy="24" />
    //         <feComposite in2="hardAlpha" operator="out" />
    //         <feColorMatrix
    //           type="matrix"
    //           values="0 0 0 0 0 0 0 0 0 0.870588 0 0 0 0 1 0 0 0 0.5 0"
    //         />
    //         <feBlend
    //           mode="normal"
    //           in2="BackgroundImageFix"
    //           result="effect1_dropShadow_307_23"
    //         />
    //         <feBlend
    //           mode="normal"
    //           in="SourceGraphic"
    //           in2="effect1_dropShadow_307_23"
    //           result="shape"
    //         />
    //       </filter>
    //     </defs>
    //   </svg>

    //   <a className={styles.logoStyle} href="#">
    //     {logo}
    //   </a>
    // </div>
    <Link to={"/"} className={twMerge(logoVariants({ size }), className)}>
      {logo}
    </Link>
  );
};

const logoVariants = cva("inline-block font-badScript hover:text-primary ", {
  variants: {
    size: {
      original: ["text-3xl", "sm:text-4xl", "md:text-5xl"],
      base: ["text-base"],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "original",
  },
});

export default Logo;
