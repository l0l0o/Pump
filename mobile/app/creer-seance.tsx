import { ExerciceAddCard } from "@/features/seances/components/ExerciceAddCard";
import { JourSelector } from "@/features/seances/components/JourSelector";
import { NomSeanceModal } from "@/features/seances/components/NomSeanceModal";
import { creerSeance, SeanceValidationError } from "@/features/seances/application/creerSeance";
import { FakeSeanceRepository } from "@/features/seances/infrastructure/FakeSeanceRepository";
import { ApiSeanceRepository } from "@/features/seances/infrastructure/ApiSeanceRepository";
import { ISeanceRepository } from "@/features/seances/domain/ports/ISeanceRepository";
import { draftSeanceStore } from "@/features/seances/store/draftSeanceStore";
import { useDraftSeance } from "@/features/seances/store/useDraftSeance";
import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const USER_ID = 1;

const repository: ISeanceRepository = __DEV__
  ? new FakeSeanceRepository()
  : new ApiSeanceRepository();

export default function CreerSeance() {
  const [showModal, setShowModal] = useState(true);
  const [saving, setSaving] = useState(false);
  const draft = useDraftSeance();

  useEffect(() => {
    draftSeanceStore.reset();
  }, []);

  const handleValider = (titre: string) => {
    draftSeanceStore.setTitre(titre);
    setShowModal(false);
  };

  const handleAnnuler = () => {
    draftSeanceStore.reset();
    router.back();
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await creerSeance(
        repository,
        USER_ID,
        draft.titre,
        draft.jours,
        draft.heures
      );
      draftSeanceStore.reset();
      router.back();
    } catch (e) {
      setSaving(false);
      if (e instanceof SeanceValidationError) {
        Alert.alert("Erreur", e.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <NomSeanceModal
        visible={showModal}
        onValider={handleValider}
        onAnnuler={handleAnnuler}
      />

      {/* Header */}
      <View style={styles.headerRow}>
        <Pressable style={styles.backButton} onPress={handleAnnuler}>
          <Text style={styles.backButtonText}>‹</Text>
        </Pressable>
        <View style={styles.titleBox}>
          <Text style={styles.titleText} numberOfLines={1}>
            {draft.titre !== "" ? draft.titre : "Sans nom"}
          </Text>
        </View>
        <Pressable
          style={[styles.saveButton, saving && styles.saveButtonDisabled]}
          onPress={handleSave}
          disabled={saving}
        >
          <Text style={styles.saveButtonText}>✓</Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <JourSelector />

        {/* Ajouter un exercice CTA */}
        <Pressable
          style={styles.addExerciceCTA}
          onPress={() => router.push("/ajouter-exercice")}
        >
          <View style={styles.addExerciceIconCircle}>
            <Text style={styles.addExerciceIconText}>+</Text>
          </View>
          <Text style={styles.addExerciceLabel}>Ajouter un exercice</Text>
        </Pressable>

        {/* Exercices ajoutés (lecture seule) */}
        {draft.exercices.map((exercice) => (
          <ExerciceAddCard key={exercice.id} exercice={exercice} readOnly />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SPACING.sm,
    gap: SPACING.xs,
  },
  headerRow: {
    flexDirection: "row",
    gap: SPACING.xs,
    alignItems: "center",
  },
  backButton: {
    width: 56,
    height: 56,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.greyLightest,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 28,
    color: COLORS.greyDark,
    lineHeight: 32,
  },
  titleBox: {
    flex: 1,
    height: 56,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.greyLightest,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.sm,
  },
  titleText: {
    fontSize: FONT.size.md,
    fontFamily: FONT.family.bold,
    color: COLORS.greyDark,
  },
  saveButton: {
    width: 56,
    height: 56,
    backgroundColor: COLORS.main,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonDisabled: {
    opacity: 0.5,
  },
  saveButtonText: {
    fontSize: FONT.size.lg,
    color: COLORS.white,
    fontFamily: FONT.family.bold,
  },
  scrollContent: {
    gap: SPACING.xs,
    paddingBottom: SPACING.lg,
  },
  addExerciceCTA: {
    backgroundColor: COLORS.mainLightest,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.sm,
    justifyContent: "center",
  },
  addExerciceIconCircle: {
    width: 32,
    height: 32,
    borderRadius: BORDER_RADIUS.rounded,
    backgroundColor: COLORS.main,
    justifyContent: "center",
    alignItems: "center",
  },
  addExerciceIconText: {
    color: COLORS.white,
    fontSize: FONT.size.xl,
    fontFamily: FONT.family.bold,
    lineHeight: 24,
  },
  addExerciceLabel: {
    color: COLORS.main,
    fontSize: FONT.size.xl,
    fontFamily: FONT.family.bold,
  },
});
