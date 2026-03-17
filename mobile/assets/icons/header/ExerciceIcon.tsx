import React from "react";
import Svg, { Path } from "react-native-svg";

interface ExerciceIconProps {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
}

const ExerciceIcon: React.FC<ExerciceIconProps> = ({
  width = 24,
  height = 24,
  stroke = "#000000",
  strokeWidth = 1.5,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6.5 6.5h1.25M16.25 6.5H17.5M6.5 17.5h1.25M16.25 17.5H17.5M3 12h2M19 12h2M5 9.5v5M19 9.5v5M7.75 6.5v11M16.25 6.5v11M7.75 12h8.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ExerciceIcon;
