import React from "react";
import Svg, { Path } from "react-native-svg";

interface ChevronIconProps {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  direction?: "left" | "right" | "up" | "down";
}

const ChevronIcon: React.FC<ChevronIconProps> = ({
  width = 24,
  height = 24,
  stroke = "#000000",
  strokeWidth = 1.5,
  direction = "left",
}) => {
  const getRotation = () => {
    switch (direction) {
      case "right":
        return "180";
      case "up":
        return "90";
      case "down":
        return "270";
      default:
        return "0";
    }
  };

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      transform={`rotate(${getRotation()})`}
    >
      <Path
        d="M15 5L9 12L15 19"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChevronIcon;
