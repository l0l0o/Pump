import { ABR_JOURS, JOURS } from "@/constants/JOURS";
import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { draftSeanceStore } from "../store/draftSeanceStore";
import { useDraftSeance } from "../store/useDraftSeance";

const JOURS_ORDER: JOURS[] = [
  JOURS.LUN,
  JOURS.MAR,
  JOURS.MER,
  JOURS.JEU,
  JOURS.VEN,
  JOURS.SAM,
  JOURS.DIM,
];

export function JourSelector() {
  const draft = useDraftSeance();

  const handleHhChange = (jour: JOURS, value: string) => {
    const heure = draft.heures[jour] ?? { hh: "", mm: "" };
    draftSeanceStore.setHeure(jour, value.replace(/\D/g, "").slice(0, 2), heure.mm);
  };

  const handleMmChange = (jour: JOURS, value: string) => {
    const heure = draft.heures[jour] ?? { hh: "", mm: "" };
    draftSeanceStore.setHeure(jour, heure.hh, value.replace(/\D/g, "").slice(0, 2));
  };

  return (
    <View style={styles.container}>
      {/* Ligne des jours */}
      <View style={styles.pillsRow}>
        {JOURS_ORDER.map((jour, index) => {
          const isSelected = draft.jours.includes(jour);
          return (
            <Pressable
              key={jour}
              onPress={() => draftSeanceStore.toggleJour(jour)}
              style={[styles.pill, isSelected ? styles.pillSelected : styles.pillUnselected]}
            >
              <Text style={[styles.pillText, isSelected ? styles.pillTextSelected : styles.pillTextUnselected]}>
                {ABR_JOURS[index]}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Ligne horaire par jour sélectionné */}
      {draft.jours.length === 0 ? (
        <Text style={styles.placeholder}>
          Veuillez choisir un ou plusieurs jours pour votre séance.
        </Text>
      ) : (
        <View style={styles.scheduleList}>
          {JOURS_ORDER.filter((j) => draft.jours.includes(j)).map((jour) => {
            const abrIndex = JOURS_ORDER.indexOf(jour);
            const heure = draft.heures[jour] ?? { hh: "", mm: "" };
            return (
              <View key={jour} style={styles.scheduleRow}>
                {/* Badge jour + icône horloge */}
                <View style={styles.badgeWrapper}>
                  <View style={styles.dayBadge}>
                    <Text style={styles.dayBadgeText}>{ABR_JOURS[abrIndex]}</Text>
                  </View>
                  <View style={styles.clockBadge}>
                    <Text style={styles.clockIcon}>⏱</Text>
                  </View>
                </View>

                {/* Champs HH et MM */}
                <View style={styles.inputs}>
                  <TextInput
                    style={styles.timeInput}
                    value={heure.hh}
                    onChangeText={(v) => handleHhChange(jour, v)}
                    placeholder="HH"
                    placeholderTextColor={COLORS.greyLighter}
                    keyboardType="numeric"
                    maxLength={2}
                    textAlign="center"
                  />
                  <TextInput
                    style={styles.timeInput}
                    value={heure.mm}
                    onChangeText={(v) => handleMmChange(jour, v)}
                    placeholder="MM"
                    placeholderTextColor={COLORS.greyLighter}
                    keyboardType="numeric"
                    maxLength={2}
                    textAlign="center"
                  />
                </View>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.greyLightest,
    borderRadius: BORDER_RADIUS.md,
    overflow: "hidden",
  },
  pillsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.greyLightest,
  },
  pill: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.rounded,
    justifyContent: "center",
    alignItems: "center",
  },
  pillSelected: {
    backgroundColor: COLORS.main,
  },
  pillUnselected: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.mainLight,
  },
  pillText: {
    fontSize: FONT.size.xs,
    fontFamily: FONT.family.bold,
  },
  pillTextSelected: {
    color: COLORS.white,
  },
  pillTextUnselected: {
    color: COLORS.mainLight,
  },
  placeholder: {
    fontSize: FONT.size.sm,
    fontFamily: FONT.family.bold,
    color: COLORS.greyLighter,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  scheduleList: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    gap: SPACING.lg,
  },
  scheduleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.xs,
  },
  badgeWrapper: {
    width: 52,
    height: 52,
    position: "relative",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  dayBadge: {
    width: 42,
    height: 42,
    borderRadius: BORDER_RADIUS.rounded,
    backgroundColor: COLORS.main,
    justifyContent: "center",
    alignItems: "center",
  },
  dayBadgeText: {
    fontSize: FONT.size.md,
    fontFamily: FONT.family.bold,
    color: COLORS.white,
  },
  clockBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: BORDER_RADIUS.rounded,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  clockIcon: {
    fontSize: 10,
  },
  inputs: {
    flex: 1,
    flexDirection: "row",
    gap: SPACING.xs,
  },
  timeInput: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.greyLightest,
    borderRadius: 4,
    fontSize: FONT.size.md,
    fontFamily: FONT.family.bold,
    color: COLORS.greyLight,
    textAlign: "center",
  },
});
