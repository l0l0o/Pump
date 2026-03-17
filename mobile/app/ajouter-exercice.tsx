import { ExerciceAddCard } from "@/features/seances/components/ExerciceAddCard";
import { draftSeanceStore } from "@/features/seances/store/draftSeanceStore";
import { FakeExerciceRepository } from "@/features/exercices/infrastructure/FakeExerciceRepository";
import { getExercices } from "@/features/exercices/application/getExercices";
import { ExerciceDefinition } from "@/shared/sport/exercice/ExerciceDefinition";
import { useAsync } from "@/shared/hooks/useAsync";
import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const repository = new FakeExerciceRepository();

export default function AjouterExercice() {
  const [search, setSearch] = useState("");
  const { data: exercices = [] } = useAsync(() => getExercices(repository), []);

  const seanceName = draftSeanceStore.get().titre;

  const filtered = useMemo(
    () =>
      exercices.filter((e) =>
        e.nom.toLowerCase().includes(search.toLowerCase().trim())
      ),
    [exercices, search]
  );

  const handleAdd = (exercice: ExerciceDefinition) => {
    draftSeanceStore.addExercice(exercice);
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>‹</Text>
        </Pressable>
        <View style={styles.titleBox}>
          <Text style={styles.titleText} numberOfLines={1}>
            {seanceName !== "" ? seanceName : "Sans nom"}
          </Text>
        </View>
        <View style={styles.placeholderButton} />
      </View>

      {/* Search input */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
          placeholder="Rechercher un exercice..."
          placeholderTextColor={COLORS.mainLight}
          returnKeyType="search"
        />
      </View>

      {/* Exercise list */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ExerciceAddCard exercice={item} onAdd={handleAdd} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Aucun exercice trouvé.</Text>
        }
      />

      {/* Créer un exercice CTA */}
      <Pressable
        style={styles.creerExerciceButton}
        onPress={() => {
          // Route not yet implemented — placeholder
          // router.push('/creer-exercice');
        }}
      >
        <Text style={styles.creerExerciceText}>Créer un exercice</Text>
      </Pressable>
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
  placeholderButton: {
    width: 56,
    height: 56,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.mainLightest,
    borderWidth: 2,
    borderColor: COLORS.mainLight,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.sm,
    gap: SPACING.xs,
  },
  searchIcon: {
    fontSize: FONT.size.sm,
  },
  searchInput: {
    flex: 1,
    paddingVertical: SPACING.sm,
    fontSize: FONT.size.sm,
    fontFamily: FONT.family.regular,
    color: COLORS.greyDark,
  },
  listContent: {
    gap: SPACING.xs,
    paddingBottom: SPACING.xs,
  },
  emptyText: {
    textAlign: "center",
    color: COLORS.greyLighter,
    fontSize: FONT.size.sm,
    fontFamily: FONT.family.regular,
    marginTop: SPACING.lg,
  },
  creerExerciceButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.greyLightest,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.sm,
    alignItems: "center",
  },
  creerExerciceText: {
    fontSize: FONT.size.sm,
    fontFamily: FONT.family.regular,
    color: COLORS.greyDark,
  },
});
