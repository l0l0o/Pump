import { COLORS } from "@/style/COLORS";
import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

interface StreakIconProps {
  width?: number;
  height?: number;
  fillBackground?: string;
  fillFire?: string;
}

const StreakIcon: React.FC<StreakIconProps> = ({
  width = 21,
  height = 21,
  fillBackground = COLORS.streakLessBackground,
  fillFire = COLORS.white,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 21 21" fill="none">
      <Rect width="21" height="21" rx="10.5" fill={fillBackground} />
      <Path
        d="M11.4402 16.867C13.6468 16.4485 16.5 14.945 16.5 11.0577C16.5 7.52064 13.7661 5.16484 11.8002 4.08254C11.3633 3.84188 10.8529 4.15808 10.8529 4.63606V5.85808C10.8529 6.82206 10.4252 8.58155 9.23647 9.31356C8.62941 9.68726 7.97294 9.12772 7.89953 8.44585L7.83882 7.88564C7.76824 7.23452 7.068 6.83944 6.51882 7.23653C5.53129 7.94848 4.5 9.19858 4.5 11.057C4.5 15.8107 8.23341 17 10.0998 17C10.2089 17 10.3228 16.9967 10.4414 16.99C9.51953 16.9158 8.02941 16.3743 8.02941 14.6228C8.02941 13.2524 9.08471 12.3265 9.88659 11.8753C10.1026 11.7549 10.3546 11.912 10.3546 12.1493V12.5438C10.3546 12.8446 10.4781 13.3159 10.7711 13.6381C11.1028 14.0031 11.5892 13.6207 11.628 13.1407C11.6407 12.9897 11.8016 12.8934 11.94 12.9696C12.3925 13.2203 12.9706 13.7551 12.9706 14.6228C12.9706 15.9919 12.1736 16.6216 11.4402 16.867Z"
        fill={fillFire}
      />
    </Svg>
  );
};

export default StreakIcon;
