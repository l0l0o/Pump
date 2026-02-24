import { useEffect, useState } from "react";
import { View } from "react-native";
import { getWeekDays } from "../hook/getTime";
import Day from "./Day";

type DayListProps = {
  selectedDate: Date;
  onSelectDay: (date: Date) => void;
};

const DayList = ({ selectedDate, onSelectDay }: DayListProps) => {
  const [weekDays, setWeekDays] = useState(getWeekDays());

  useEffect(() => {
    const interval = setInterval(() => {
      setWeekDays(getWeekDays());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flexDirection: "row" }}>
      {weekDays.map((day, index) => (
        <Day
          key={index}
          dayName={day.dayNameShort}
          dayNumber={day.dayNumber}
          isToday={day.isToday}
          isSelected={day.date.toDateString() === selectedDate.toDateString()}
          onPress={() => onSelectDay(day.date)}
        />
      ))}
    </View>
  );
};

export default DayList;
