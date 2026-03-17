import StreakIcon from "@/assets/icons/streak/streak";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Text, View } from "react-native";

const StreakIndicator = ({
  userConsecutiveStreak,
}: {
  userConsecutiveStreak: number;
}) => {
  const streakColor = () => {
    if (userConsecutiveStreak >= 15) return COLORS.streak3Background;
    if (userConsecutiveStreak >= 7) return COLORS.streak2Background;
    if (userConsecutiveStreak >= 3) return COLORS.streak1Background;
    if (userConsecutiveStreak >= 1) return COLORS.streak0Background;
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
        {userConsecutiveStreak}{" "}
        {userConsecutiveStreak > 1
          ? "séances consécutives"
          : "séance consécutive"}
      </Text>
    </View>
  );
};

export default StreakIndicator;
