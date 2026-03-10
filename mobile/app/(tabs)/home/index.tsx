import { JOURS } from "@/constants/JOURS";
import LevelIndicator from "@/features/level-indicator/LevelIndicator";
import Planner from "@/features/planner/Planner";
import fakeSeancesData from "@/features/planner/data/fakeSeances.json";
import { Seance } from "@/shared/sport/seance/Seance";
import { User } from "@/shared/user/User";
import { COLORS } from "@/style/COLORS";
import { SPACING } from "@/style/SPACING";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [seance, setSeance] = useState<Seance[] | null>(null);
  const [consecutiveStreak, setConsecutiveStreak] = useState<number>(0);

  useEffect(() => {
    setUser(new User(1, "Lolo"));

    // Convertir les données JSON en instances de Seance
    const seances = fakeSeancesData.map(
      (data) =>
        new Seance(
          data.seance_id,
          data.user_id,
          data.titre,
          data.jours.map(
            (jour) =>
              JOURS[jour.substring(0, 3).toUpperCase() as keyof typeof JOURS],
          ),
          data.heures,
        ),
    );

    setSeance(seances);
    setConsecutiveStreak(15);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: SPACING.sm,
        backgroundColor: COLORS.white,
        gap: SPACING.sm,
      }}
    >
      <LevelIndicator
        username={user?.getNomComplet() ?? ""}
        userConsecutiveStreak={consecutiveStreak}
      />
      <Planner seances={seance ?? []} />
    </View>
  );
}
