import { Seance } from "@/shared/sport/seance/Seance";
import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Pressable, Text, View } from "react-native";

interface SeanceCardProps {
  seance: Seance;
  isCompleted: boolean;
}

const SeanceCard = ({ seance, isCompleted }: SeanceCardProps) => {
  const backgroundColor = isCompleted ? COLORS.main : "#FF9F43";

  // Gérer le cas où heures est un tableau
  const heures = seance.getHeures();
  const heureStr = Array.isArray(heures) ? heures[0] : heures;

  const statusText = isCompleted
    ? `Effectué à ${heureStr}`
    : `prévue à ${heureStr}`;

  return (
    <Pressable
      style={{
        backgroundColor,
        borderRadius: BORDER_RADIUS.md,
        padding: SPACING.md,
        gap: SPACING.xs,
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
            color: COLORS.white,
            fontSize: FONT.size.lg,
            fontFamily: FONT.family.bold,
          }}
        >
          {seance.getTitre()}
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: FONT.size.sm,
            fontFamily: FONT.family.regular,
          }}
        >
          {statusText}
        </Text>
      </View>

      {!isCompleted && (
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: SPACING.xxs,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: FONT.size.md,
              fontFamily: FONT.family.regular,
            }}
          >
            Commencer maintenant
          </Text>
          <Text style={{ color: COLORS.white, fontSize: FONT.size.lg }}>▶</Text>
        </Pressable>
      )}
    </Pressable>
  );
};

export default SeanceCard;
