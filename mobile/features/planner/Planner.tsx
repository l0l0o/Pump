import Container from "@/components/ui/Container";
import { JOURS } from "@/constants/JOURS";
import { Seance } from "@/shared/sport/seance/Seance";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getCurrentDate } from "./hook/getTime";
import AddExerciseButton from "./components/AddExerciseButton";
import DayList from "./components/DayList";
import SeanceCard from "./components/SeanceCard";

const Planner = ({ seances }: { seances: Seance[] }) => {
  const [currentTime, setCurrentTime] = useState(getCurrentDate());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentDate());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Convertir une date en JOURS enum
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

  // Filtrer les séances pour le jour sélectionné
  const filteredSeances = seances.filter((seance) => {
    const jourSelectionne = getJourFromDate(selectedDate);
    return seance.getJours().includes(jourSelectionne);
  });

  // Fonction pour déterminer si une séance est complétée
  const isSeanceCompleted = (seance: Seance) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const selected = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    );

    // Si le jour sélectionné est dans le futur, la séance n'est pas complétée
    if (selected > today) {
      return false;
    }

    // Si le jour sélectionné est dans le passé, la séance est complétée
    if (selected < today) {
      return true;
    }

    // Si c'est aujourd'hui, comparer l'heure
    const heures = seance.getHeures();
    const heureStr = Array.isArray(heures) ? heures[0] : heures;

    if (!heureStr || typeof heureStr !== "string") {
      return false;
    }

    const [hours, minutes] = heureStr.split(":");
    const seanceTime = new Date();
    seanceTime.setHours(parseInt(hours), parseInt(minutes), 0);
    return now > seanceTime;
  };

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
          {filteredSeances.length === 0 ? (
            <AddExerciseButton />
          ) : (
            filteredSeances.map((seance, index) => (
              <SeanceCard
                key={index}
                seance={seance}
                isCompleted={isSeanceCompleted(seance)}
              />
            ))
          )}
        </View>
      </View>
    </Container>
  );
};

export default Planner;
