import { useEffect, useState } from "react";
import { View } from "react-native";
import { getWeekDays } from "../hook/getTime";
import Day from "./Day";

const DayList = () => {
  const [weekDays, setWeekDays] = useState(getWeekDays());

  useEffect(() => {
    const interval = setInterval(() => {
      setWeekDays(getWeekDays());
    }, 60000); // Mise à jour toutes les minutes

    return () => clearInterval(interval);
  }, []);

  console.log(getWeekDays());
  return (
    <View style={{ flexDirection: "row" }}>
      {weekDays.map((day, index) => (
        <Day key={index} dayName={day.dayNameShort} dayNumber={day.dayNumber} isToday={day.isToday} />
      ))}
    </View>
  );
};

export default DayList;
