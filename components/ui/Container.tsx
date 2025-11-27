import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { SPACING } from "@/style/SPACING";
import { View } from "react-native";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        width: "100%",
        padding: SPACING.sm,
        borderColor: COLORS.greyLightest,
        borderWidth: 1,
        borderRadius: BORDER_RADIUS.md,
        backgroundColor: COLORS.white,
        marginTop: SPACING.md,
      }}
    >
      {children}
    </View>
  );
};

export default Container;
