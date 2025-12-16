import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Text, View } from "react-native";

import Container from "@/components/ui/Container";
import StreakIndicator from "@/features/level-indicator/modules/StreakIndicator";

type LevelIndicatorProps = {
  username: string;
  userConsecutiveStreak: number;
};

const LevelIndicator = ({
  username,
  userConsecutiveStreak,
}: LevelIndicatorProps) => {
  return (
    <Container>
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
            {/* Titre display */}
            {/*               
                {titre.length > 0 && (
                  <>
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
                  </>
                )}
              */}
          </View>

          {/* Level display */}
          {/* 
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
            */}
          <StreakIndicator userConsecutiveStreak={userConsecutiveStreak} />
        </View>
        {/* Experience Bar */}
        {/*           
            <ExperienceBar
              experience={experience}
              maxExperience={maxExperience}
            />
          */}
      </View>
    </Container>
  );
};

export default LevelIndicator;
