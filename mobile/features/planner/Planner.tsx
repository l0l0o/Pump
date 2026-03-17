import Container from "@/components/ui/Container";
import { JOURS } from "@/constants/JOURS";
import { useAsync } from "@/shared/hooks/useAsync";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { getCurrentDate } from "./hook/getTime";
import AddExerciseButton from "./components/AddExerciseButton";
import DayList from "./components/DayList";
import SeanceCard from "./components/SeanceCard";
import { FakeSeanceRepository } from "./infrastructure/FakeSeanceRepository";
import { ApiSeanceRepository } from "./infrastructure/ApiSeanceRepository";
import { ISeanceRepository } from "./domain/ports/ISeanceRepository";
import { getSeancesDuJour } from "./application/getSeancesDuJour";
import { Seance } from "@/shared/sport/seance/Seance";

// TODO: remplacer par l'userId issu du contexte d'authentification
const USER_ID = 1;

const repository: ISeanceRepository = __DEV__
  ? new FakeSeanceRepository()
  : new ApiSeanceRepository();

const getJourFromDate = (date: Date): JOURS => {
  const joursFR = [
    JOURS.DIM,
    JOURS.LUN,
    JOURS.MAR,
    JOURS.MER,
    JOURS.JEU,
    JOURS.VEN,
    JOURS.SAM,
  ];
  return joursFR[date.getDay()];
};

const isSeanceCompleted = (seance: Seance, selectedDate: Date): boolean => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const selected = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate()
  );

  if (selected > today) return false;
  if (selected < today) return true;

  const heures = seance.getHeures();
  const heureStr = Array.isArray(heures) ? heures[0] : heures;

  if (!heureStr || typeof heureStr !== "string") return false;

  const [hours, minutes] = heureStr.split(":");
  const seanceTime = new Date();
  seanceTime.setHours(parseInt(hours), parseInt(minutes), 0);
  return now > seanceTime;
};

const Planner = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentDate());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentDate());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const jour = useMemo(() => getJourFromDate(selectedDate), [selectedDate]);

  const { data: seances = [] } = useAsync(
    () => getSeancesDuJour(repository, USER_ID, jour),
    [jour]
  );

  return (
    <Container>
      <View
        style={{
          flexDirection: "column",
          gap: SPACING.sm,
          justifyContent: "space-between",
        }}
      >
        {/* Month Year */}
        <View style={{ flexDirection: "row", gap: SPACING.xxs }}>
          <Text
            style={{
              color: COLORS.greyLight,
              fontSize: FONT.size.xl,
              fontFamily: FONT.family.regular,
            }}
          >
            {currentTime.month}
          </Text>
          <Text
            style={{
              color: COLORS.greyLighter,
              fontSize: FONT.size.xl,
              fontFamily: FONT.family.bold,
            }}
          >
            {currentTime.year}
          </Text>
        </View>

        {/* Days */}
        <DayList selectedDate={selectedDate} onSelectDay={setSelectedDate} />

        {/* Seances List */}
        <View style={{ gap: SPACING.sm }}>
          {seances.length === 0 ? (
            <AddExerciseButton />
          ) : (
            seances.map((seance, index) => (
              <SeanceCard
                key={index}
                seance={seance}
                isCompleted={isSeanceCompleted(seance, selectedDate)}
              />
            ))
          )}
        </View>
      </View>
    </Container>
  );
};

export default Planner;
