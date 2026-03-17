import { ExerciceDefinition } from "@/shared/sport/exercice/ExerciceDefinition";
import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ExerciceAddCardProps {
  exercice: ExerciceDefinition;
  onAdd?: (e: ExerciceDefinition) => void;
  readOnly?: boolean;
}

export function ExerciceAddCard({ exercice, onAdd, readOnly = false }: ExerciceAddCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        !readOnly && pressed && styles.cardPressed,
      ]}
      onPress={readOnly ? undefined : () => onAdd?.(exercice)}
      disabled={readOnly}
    >
      <Text style={styles.titre}>{exercice.nom}</Text>
      <View style={styles.tagRow}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{exercice.groupeMusculaire}</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{exercice.format}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.main,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    width: "100%",
    gap: SPACING.xs,
  },
  cardPressed: {
    opacity: 0.85,
  },
  titre: {
    color: COLORS.white,
    fontSize: FONT.size.sm,
    fontFamily: FONT.family.bold,
  },
  tagRow: {
    flexDirection: "row",
    gap: SPACING.xs,
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.rounded,
    paddingHorizontal: SPACING.xs,
    paddingVertical: SPACING.xxxs,
  },
  tagText: {
    color: COLORS.main,
    fontSize: 8,
    fontFamily: FONT.family.bold,
  },
});
