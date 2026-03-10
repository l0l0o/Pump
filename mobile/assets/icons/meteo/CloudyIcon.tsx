import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CloudyIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const CloudyIcon: React.FC<CloudyIconProps> = ({
  width = 24,
  height = 24,
  fill = '#000000',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.286 20C19.442 20 22 17.472 22 14.353C22 11.881 20.393 9.78 18.155 9.015C17.837 6.194 15.415 4 12.476 4C9.32 4 6.762 6.528 6.762 9.647C6.762 10.337 6.887 10.997 7.116 11.609C6.84249 11.5561 6.56458 11.5293 6.286 11.529C3.919 11.53 2 13.426 2 15.765C2 18.104 3.919 20 6.286 20H16.286Z"
        fill={fill}
      />
      <Path
        d="M9.94 2.95501C8.90786 2.20343 7.62729 1.87518 6.36087 2.03757C5.09445 2.19995 3.93813 2.84066 3.129 3.82832C2.31986 4.81599 1.91922 6.07578 2.00921 7.34939C2.0992 8.623 2.67302 9.81393 3.613 10.678C4.13598 10.4076 4.69708 10.2185 5.277 10.117C5.26674 9.96055 5.26173 9.8038 5.262 9.64701C5.262 6.57401 7.213 3.97001 9.94 2.95501Z"
        fill={fill}
      />
    </Svg>
  );
};

export default CloudyIcon;