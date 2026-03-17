import ExerciceIcon from "@/assets/icons/header/ExerciceIcon";
import Header from "@/components/ui/Header/Header";
import ExerciceList from "@/features/exercices/ExerciceList";
import { COLORS } from "@/style/COLORS";
import { SPACING } from "@/style/SPACING";
import { View } from "react-native";

export default function ExercicesScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: SPACING.sm,
        backgroundColor: COLORS.white,
        gap: SPACING.sm,
      }}
    >
      <Header
        tabInfo={{ icon: <ExerciceIcon />, label: "Exercices" }}
        toggleBackButton={false}
      />
      <ExerciceList />
    </View>
  );
}
