import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Text, TouchableOpacity, View } from "react-native";

type DayProps = {
  dayName: string;
  dayNumber: number;
  isToday: boolean;
  isSelected: boolean;
  onPress: () => void;
};

const Day = ({
  dayName,
  dayNumber,
  isToday,
  isSelected,
  onPress,
}: DayProps) => {
  // 4 états possibles
  const isTodaySelected = isToday && isSelected;
  const isTodayNotSelected = isToday && !isSelected;
  const isSelectedNotToday = !isToday && isSelected;
  // const isDefault = !isToday && !isSelected;

  // Styles selon l'état
  const getBackgroundColor = () => {
    if (isTodaySelected || isSelectedNotToday) return COLORS.black;
    if (isTodayNotSelected) return COLORS.mainLightest;
    return "transparent";
  };

  const getBorderColor = () => {
    if (isTodaySelected || isSelectedNotToday) return COLORS.white;
    if (isTodayNotSelected) return COLORS.main;
    return COLORS.greyLightest;
  };

  const getDayNameColor = () => {
    if (isTodaySelected || isSelectedNotToday) return COLORS.white;
    if (isTodayNotSelected) return COLORS.main;
    return COLORS.greyLighter;
  };

  const getDayNumberColor = () => {
    if (isTodaySelected || isSelectedNotToday) return COLORS.white;
    if (isTodayNotSelected) return COLORS.main;
    return COLORS.greyLight;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        padding: SPACING.xxs,
        gap: SPACING.sm,
        backgroundColor: getBackgroundColor(),
        borderRadius: BORDER_RADIUS.md,
      }}
    >
      <View
        style={{
          alignItems: "center",
          gap: SPACING.xxs,
          borderColor: getBorderColor(),
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
            color: getDayNameColor(),
          }}
        >
          {dayName}
        </Text>
        <Text
          style={{
            fontWeight: FONT.weight.regular,
            fontSize: FONT.size.xl,
            color: getDayNumberColor(),
          }}
        >
          {dayNumber}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Day;
