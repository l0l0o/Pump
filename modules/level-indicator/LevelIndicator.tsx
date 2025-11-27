import StreakIcon from "@/assets/images/streak/streak";
import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Text, View } from "react-native";

const LevelIndicator = () => {
  const username: string = "John";
  const titre: string = "Musclor";
  const niveau: number = 3;
  const maxExperience: number = 2000;
  const experience: number = 1783;
  const user_consecutive_streak: number = 16;

  const experiencePercent: number = (experience / maxExperience) * 100;

  const streakColor = () => {
    if (user_consecutive_streak >= 15) return COLORS.streak3Background;
    if (user_consecutive_streak >= 7) return COLORS.streak2Background;
    if (user_consecutive_streak >= 3) return COLORS.streak1Background;
    if (user_consecutive_streak >= 1) return COLORS.streak0Background;
    return COLORS.streakLessBackground;
  };

  const colorStreak = streakColor();

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
        </View>
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
      </View>
    </View>
  );
};

export default LevelIndicator;
