import Container from "@/components/ui/Container";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getCurrentDate } from "./hook/getTime";
import DayList from "./modules/DayList";

const Planner = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentDate());
    }, 60000); // Mise à jour toutes les minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <View
        style={{
          flexDirection: "column",
          gap: SPACING.sm,
          justifyContent: "space-between",
        }}
      >
        {/* Jauge temps */}
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
        <DayList />
      </View>
    </Container>
  );
};

export default Planner;
