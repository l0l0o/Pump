import LevelIndicator from "@/modules/level-indicator/LevelIndicator";
import { User } from "@/shared/user/User";
import { COLORS } from "@/style/COLORS";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [consecutiveStreak, setConsecutiveStreak] = useState<number>(0);

  useEffect(() => {
    setUser(new User(1, "Lolo"));
    setConsecutiveStreak(15);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <LevelIndicator
        username={user?.getNomComplet() ?? ""}
        userConsecutiveStreak={consecutiveStreak}
      />
    </View>
  );
}
