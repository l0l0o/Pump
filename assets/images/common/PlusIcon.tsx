import React from "react";
import Svg, { Path } from "react-native-svg";

interface PlusIconProps {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
}

const PlusIcon: React.FC<PlusIconProps> = ({
  width = 16,
  height = 16,
  stroke = "#FFFFFF",
  strokeWidth = 1.5,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M0.75 7.75H14.75M7.75 0.75V14.75"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PlusIcon;
