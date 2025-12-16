import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Text, TouchableOpacity, View } from "react-native";

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
    <TouchableOpacity
      style={{
        flex: 1,
        padding: SPACING.xxs,
        gap: SPACING.sm,
        backgroundColor: isToday ? COLORS.black : "transparent",
        borderRadius: BORDER_RADIUS.md,
      }}
    >
      <View
        style={{
          alignItems: "center",
          gap: SPACING.xxs,
          borderColor: isToday ? COLORS.white : COLORS.greyLightest,
          borderStyle: "solid",
          borderWidth: 1.5,
          borderRadius: BORDER_RADIUS.sm,
          padding: SPACING.xxs,
        }}
      >
        <Text
          style={{
            fontWeight: FONT.weight.regular,
            fontSize: FONT.size.sm,
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
    </TouchableOpacity>
  );
};

export default Day;
