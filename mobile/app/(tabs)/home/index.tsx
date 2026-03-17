import LevelIndicator from "@/features/level-indicator/LevelIndicator";
import Planner from "@/features/planner/Planner";
import { COLORS } from "@/style/COLORS";
import { SPACING } from "@/style/SPACING";
import { View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        padding: SPACING.sm,
        backgroundColor: COLORS.white,
        gap: SPACING.sm,
      }}
    >
      <LevelIndicator />
      <Planner />
    </View>
  );
}
