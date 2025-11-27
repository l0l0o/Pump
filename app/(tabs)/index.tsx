import LevelIndicator from "@/modules/level-indicator/LevelIndicator";
import { COLORS } from "@/style/COLORS";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <LevelIndicator />
    </View>
  );
}
