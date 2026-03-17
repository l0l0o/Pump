import ChevronIcon from "@/assets/icons/common/ChevronIcon";
import { COLORS } from "@/style/COLORS";
import { Pressable } from "react-native";

const BackButton = ({ onPress }: { onPress?: () => void }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 64,
        height: 64,
        borderColor: COLORS.greyLightest,
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: COLORS.white,
      }}
    >
      <ChevronIcon direction="left" />
    </Pressable>
  );
};

export default BackButton;
