import {
  ExerciceDefinition,
  GroupeMusculaire,
} from "@/shared/sport/exercice/ExerciceDefinition";
import { useAsync } from "@/shared/hooks/useAsync";
import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import ExerciceCard from "./components/ExerciceCard";
import { FakeExerciceRepository } from "./infrastructure/FakeExerciceRepository";
import { ApiExerciceRepository } from "./infrastructure/ApiExerciceRepository";
import { IExerciceRepository } from "./domain/ports/IExerciceRepository";
import { getExercices } from "./application/getExercices";

const FILTRES: { label: string; value: GroupeMusculaire | "tous" }[] = [
  { label: "Tous", value: "tous" },
  { label: "Pectoraux", value: "pectoraux" },
  { label: "Dos", value: "dos" },
  { label: "Épaules", value: "epaules" },
  { label: "Biceps", value: "biceps" },
  { label: "Triceps", value: "triceps" },
  { label: "Jambes", value: "jambes" },
  { label: "Abdominaux", value: "abdominaux" },
  { label: "Cardio", value: "cardio" },
];

const repository: IExerciceRepository = __DEV__
  ? new FakeExerciceRepository()
  : new ApiExerciceRepository();

const ExerciceList = () => {
  const [search, setSearch] = useState("");
  const [filtre, setFiltre] = useState<GroupeMusculaire | "tous">("tous");

  const { data: exercices = [] } = useAsync(() => getExercices(repository));

  const filtered = useMemo(() => {
    return exercices.filter((e: ExerciceDefinition) => {
      const matchSearch = e.nom
        .toLowerCase()
        .includes(search.toLowerCase().trim());
      const matchFiltre =
        filtre === "tous" || e.groupeMusculaire === filtre;
      return matchSearch && matchFiltre;
    });
  }, [exercices, search, filtre]);

  return (
    <View style={{ flex: 1, gap: SPACING.sm }}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Rechercher un exercice..."
        placeholderTextColor={COLORS.greyLighter}
        style={{
          backgroundColor: COLORS.greyLightest,
          borderRadius: BORDER_RADIUS.md,
          paddingHorizontal: SPACING.md,
          paddingVertical: SPACING.sm,
          fontFamily: FONT.family.regular,
          fontSize: FONT.size.sm,
          color: COLORS.black,
        }}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: SPACING.xxs }}
      >
        {FILTRES.map((f) => {
          const actif = filtre === f.value;
          return (
            <Pressable
              key={f.value}
              onPress={() => setFiltre(f.value)}
              style={{
                paddingHorizontal: SPACING.sm,
                paddingVertical: SPACING.xxs,
                borderRadius: BORDER_RADIUS.rounded,
                backgroundColor: actif ? COLORS.main : COLORS.greyLightest,
              }}
            >
              <Text
                style={{
                  fontFamily: FONT.family.regular,
                  fontSize: FONT.size.sm,
                  color: actif ? COLORS.white : COLORS.greyDark,
                }}
              >
                {f.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ExerciceCard exercice={item} />}
        ItemSeparatorComponent={() => <View style={{ height: SPACING.xs }} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: "center",
              color: COLORS.greyLight,
              fontFamily: FONT.family.regular,
              fontSize: FONT.size.sm,
              marginTop: SPACING.lg,
            }}
          >
            Aucun exercice trouvé
          </Text>
        }
      />
    </View>
  );
};

export default ExerciceList;
