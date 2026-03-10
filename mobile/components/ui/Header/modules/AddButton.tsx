import PlusIcon from "@/assets/images/common/PlusIcon";
import { COLORS } from "@/style/COLORS";
import { Pressable } from "react-native";

const AddButton = () => {
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
        backgroundColor: COLORS.main,
      }}
    >
      <PlusIcon />
    </Pressable>
  );
};

export default AddButton;
