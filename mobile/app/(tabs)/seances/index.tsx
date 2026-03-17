import AddIcon from "@/assets/icons/exercise/AddIcon";
import SeanceIcon from "@/assets/icons/header/SeanceIcon";
import Header from "@/components/ui/Header/Header";
import { getSeances } from "@/features/seances/application/getSeances";
import { FakeSeanceRepository } from "@/features/seances/infrastructure/FakeSeanceRepository";
import SeanceCard from "@/features/planner/components/SeanceCard";
import { useAsync } from "@/shared/hooks/useAsync";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

const repository = new FakeSeanceRepository();
const creerSeance = () => router.push("/creer-seance");

const SeancesScreen = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  // Rafraîchit la liste à chaque fois que l'écran devient actif
  useFocusEffect(
    useCallback(() => {
      setRefreshKey((k) => k + 1);
    }, [])
  );

  const { data: seances = [], loading } = useAsync(
    () => getSeances(repository, 1),
    [refreshKey]
  );

  const hasSeances = !loading && seances.length > 0;

  return (
    <View
      style={{
        flex: 1,
        padding: SPACING.sm,
        backgroundColor: COLORS.white,
        gap: SPACING.sm,
      }}
    >
      <Header
        tabInfo={{ icon: <SeanceIcon />, label: "Séances" }}
        toggleBackButton={false}
        onAdd={creerSeance}
      />

      {hasSeances ? (
        <ScrollView
          contentContainerStyle={{ gap: SPACING.sm }}
          showsVerticalScrollIndicator={false}
        >
          {seances.map((seance) => (
            <SeanceCard
              key={seance.getSeanceId()}
              seance={seance}
              isCompleted={false}
            />
          ))}
        </ScrollView>
      ) : (
        <Pressable
          onPress={creerSeance}
          style={{
            justifyContent: "center",
            height: 200,
            width: "100%",
            backgroundColor: COLORS.mainLightest,
            borderStyle: "dashed",
            borderWidth: 2,
            borderColor: COLORS.main,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <AddIcon fill={COLORS.main} />
          <Text
            style={{
              color: COLORS.main,
              marginTop: SPACING.xs,
              fontSize: FONT.size.sm,
              fontWeight: FONT.weight.bold,
            }}
          >
            Créer une nouvelle séance
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default SeancesScreen;
