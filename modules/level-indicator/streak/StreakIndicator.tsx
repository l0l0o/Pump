import StreakIcon from "@/assets/images/streak/streak";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Text, View } from "react-native";

const StreakIndicator = ({
  user_consecutive_streak,
}: {
  user_consecutive_streak: number;
}) => {
  const streakColor = () => {
    if (user_consecutive_streak >= 15) return COLORS.streak3Background;
    if (user_consecutive_streak >= 7) return COLORS.streak2Background;
    if (user_consecutive_streak >= 3) return COLORS.streak1Background;
    if (user_consecutive_streak >= 1) return COLORS.streak0Background;
    return COLORS.streakLessBackground;
  };

  const colorStreak = streakColor();
  return (
    <View
      style={{
        paddingHorizontal: SPACING.xxxs,
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.xs,
      }}
    >
      <StreakIcon fillBackground={colorStreak} />
      <Text
        style={{
          color: colorStreak,
          fontFamily: FONT.family.bold,
          fontSize: FONT.size.sm,
        }}
      >
        {user_consecutive_streak}{" "}
        {user_consecutive_streak > 1 ? "séances" : "séance"} consécutives
      </Text>
    </View>
  );
};

export default StreakIndicator;
