import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Text, View } from "react-native";

import ExperienceBar from "@/modules/level-indicator/experience/experienceBar";
import StreakIndicator from "@/modules/level-indicator/streak/streakIndicator";

const LevelIndicator = () => {
  const username: string = "John";
  const titre: string = "Musclor";
  const niveau: number = 3;
  const maxExperience: number = 2000;
  const experience: number = 1500;
  const user_consecutive_streak: number = 16;

  return (
    <View style={{ padding: SPACING.sm, width: "100%" }}>
      <View
        style={{
          paddingHorizontal: SPACING.md,
          paddingVertical: SPACING.sm,
          borderColor: COLORS.greyLightest,
          borderWidth: 1,
          borderRadius: BORDER_RADIUS.md,
          backgroundColor: COLORS.white,
          width: "100%",
          gap: SPACING.xs,
        }}
      >
        <View style={{ gap: SPACING.xs, flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SPACING.xxs,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: SPACING.xxs,
              }}
            >
              <Text
                style={{
                  fontFamily: FONT.family.bold,
                  fontSize: FONT.size.sm,
                  color: COLORS.black,
                }}
              >
                {username}
              </Text>
              <Text
                style={{
                  color: COLORS.greyLighter,
                  fontFamily: FONT.family.bold,
                  fontSize: FONT.size.sm,
                }}
              >
                -
              </Text>
              <Text
                style={{
                  color: COLORS.greyLighter,
                  fontFamily: FONT.family.bold,
                  fontSize: FONT.size.sm,
                }}
              >
                {titre}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: COLORS.greyLighter,
                  fontFamily: FONT.family.bold,
                  fontSize: FONT.size.sm,
                }}
              >
                Niveau {niveau}
              </Text>
            </View>
          </View>
          <StreakIndicator user_consecutive_streak={user_consecutive_streak} />
        </View>
        <ExperienceBar experience={experience} maxExperience={maxExperience} />
      </View>
    </View>
  );
};

export default LevelIndicator;
