import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Text, View } from "react-native";

import Container from "@/components/ui/Container";
import StreakIndicator from "@/features/level-indicator/components/StreakIndicator";
import { useAsync } from "@/shared/hooks/useAsync";
import { FakeProgressionRepository } from "./infrastructure/FakeProgressionRepository";
import { ApiProgressionRepository } from "./infrastructure/ApiProgressionRepository";
import { IProgressionRepository } from "./domain/ports/IProgressionRepository";
import { getProgression } from "./application/getProgression";

// TODO: remplacer par l'userId issu du contexte d'authentification
const USER_ID = 1;

const repository: IProgressionRepository = __DEV__
  ? new FakeProgressionRepository()
  : new ApiProgressionRepository();

const LevelIndicator = () => {
  const { data: progression } = useAsync(() =>
    getProgression(repository, USER_ID)
  );

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
              {progression?.username ?? ""}
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
          <StreakIndicator userConsecutiveStreak={progression?.streak ?? 0} />
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
