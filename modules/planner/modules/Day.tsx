import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Text, View } from "react-native";

const Day = ({
  dayName,
  dayNumber,
  isToday,
}: {
  dayName: string;
  dayNumber: number;
  isToday: boolean;
}) => {
  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        padding: SPACING.sm,
        gap: SPACING.sm,
        backgroundColor: isToday ? COLORS.black : "transparent",
        borderRadius: BORDER_RADIUS.md,
      }}
    >
      <Text
        style={{
          fontWeight: FONT.weight.regular,
          fontSize: FONT.size.xl,
          color: isToday ? COLORS.white : COLORS.greyLighter,
        }}
      >
        {dayName}
      </Text>
      <Text
        style={{
          fontWeight: FONT.weight.regular,
          color: isToday ? COLORS.white : COLORS.greyLight,
          fontSize: FONT.size.xl,
        }}
      >
        {dayNumber}
      </Text>
    </View>
  );
};

export default Day;
