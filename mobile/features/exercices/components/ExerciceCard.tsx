import { ExerciceDefinition, GroupeMusculaire } from "@/shared/sport/exercice/ExerciceDefinition";
import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Text, View } from "react-native";

const GROUPE_LABEL: Record<GroupeMusculaire, string> = {
  pectoraux: "Pectoraux",
  dos: "Dos",
  epaules: "Épaules",
  biceps: "Biceps",
  triceps: "Triceps",
  jambes: "Jambes",
  abdominaux: "Abdominaux",
  cardio: "Cardio",
};

interface ExerciceCardProps {
  exercice: ExerciceDefinition;
}

const ExerciceCard: React.FC<ExerciceCardProps> = ({ exercice }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.greyLightest,
        borderRadius: BORDER_RADIUS.md,
        padding: SPACING.md,
        gap: SPACING.xxs,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: FONT.family.bold,
            fontSize: FONT.size.md,
            color: COLORS.black,
            flex: 1,
          }}
        >
          {exercice.nom}
        </Text>
        <View
          style={{
            backgroundColor: COLORS.mainLightest,
            borderRadius: BORDER_RADIUS.rounded,
            paddingHorizontal: SPACING.xs,
            paddingVertical: SPACING.xxxs,
          }}
        >
          <Text
            style={{
              fontFamily: FONT.family.regular,
              fontSize: FONT.size.xs,
              color: COLORS.main,
            }}
          >
            {exercice.format === "repetitions" ? "Répétitions" : "Durée"}
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontFamily: FONT.family.regular,
          fontSize: FONT.size.sm,
          color: COLORS.grey,
        }}
      >
        {GROUPE_LABEL[exercice.groupeMusculaire]}
      </Text>

      {exercice.description && (
        <Text
          style={{
            fontFamily: FONT.family.regular,
            fontSize: FONT.size.xs,
            color: COLORS.greyLight,
            marginTop: SPACING.xxxs,
          }}
          numberOfLines={2}
        >
          {exercice.description}
        </Text>
      )}
    </View>
  );
};

export default ExerciceCard;
