import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { SPACING } from "@/style/SPACING";
import { DimensionValue, View, ViewProps, ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode;
  width?: DimensionValue;
  height?: DimensionValue;
  style?: ViewStyle;
} & ViewProps;

const Container = ({
  children,
  width = "100%",
  height,
  style,
  ...props
}: Props) => {
  return (
    <View
      style={[
        {
          width: width,
          height: height,
          padding: SPACING.sm,
          borderColor: COLORS.greyLightest,
          borderWidth: 1,
          borderRadius: BORDER_RADIUS.md,
          backgroundColor: COLORS.white,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default Container;
