import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { SPACING } from "@/style/SPACING";
import { View } from "react-native";

const ExperienceBar = ({
  experience,
  maxExperience,
}: {
  experience: number;
  maxExperience: number;
}) => {
  const experiencePercent: number = (experience / maxExperience) * 100;

  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SPACING.xxs,
        flexDirection: "row",
        gap: SPACING.xxxs,
      }}
    >
      {experiencePercent !== 0 && (
        <View
          style={{
            height: SPACING.xxs,
            borderRadius: BORDER_RADIUS.rounded,
            backgroundColor: COLORS.experienceBarFill,
            width: `${experiencePercent}%`,
          }}
        />
      )}
      <View
        style={{
          height: SPACING.xxs,
          width: `${100 - experiencePercent}%`,
          borderRadius: BORDER_RADIUS.rounded,
          backgroundColor: COLORS.experienceBarUnfill,
        }}
      />
    </View>
  );
};

export default ExperienceBar;
