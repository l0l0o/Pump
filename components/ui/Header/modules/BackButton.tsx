import ChevronIcon from "@/assets/images/common/ChevronIcon";
import { COLORS } from "@/style/COLORS";
import { Pressable } from "react-native";

const BackButton = () => {
  return (
    <Pressable
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
