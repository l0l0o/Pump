export const getCurrentDate = () => {
  const date = new Date();
  const day = date.toLocaleString("fr-FR", { day: "numeric" });
  const monthName = date.toLocaleString("fr-FR", { month: "long" });
  const month = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  const year = date.getFullYear();

  return { day, month, year };
};

// Obtenir le lundi de la semaine actuelle
export const getMondayOfWeek = () => {
  const date = new Date();
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day; // Si dimanche (0), reculer de 6 jours
  date.setDate(date.getDate() + diff);

  return date;
};

// Générer un tableau de 7 jours à partir du lundi avec format français
export const getWeekDays = () => {
  const monday = getMondayOfWeek();
  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);

    const dayNameShort = day.toLocaleString("fr-FR", { weekday: "short" });
    const dayName =
      dayNameShort.charAt(0).toUpperCase() + dayNameShort.slice(1);

    

    return {
      isToday: new Date().toDateString() === day.toDateString(),
      date: day,
      dayNumber: day.getDate(),
      dayName: day.toLocaleString("fr-FR", { weekday: "long" }),
      dayNameShort: dayName.substring(0, 2),
      month: day.toLocaleString("fr-FR", { month: "long" }),
      year: day.getFullYear(),
    };
  });
};
