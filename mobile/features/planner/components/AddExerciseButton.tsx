import AddIcon from "@/assets/icons/exercise/AddIcon";
import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Pressable, Text } from "react-native";

const AddExerciseButton = () => {
  return (
    <Pressable
      style={{
        padding: SPACING.lg,
        backgroundColor: COLORS.mainLightest,
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        borderRadius: BORDER_RADIUS.md,
      }}
    >
      <AddIcon fill={COLORS.main} />
      <Text style={{ color: COLORS.main, fontFamily: FONT.family.bold }}>
        Créer une nouvelle séance
      </Text>
    </Pressable>
  );
};

export default AddExerciseButton;
