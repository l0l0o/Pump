export const COLORS = {
  // Main colors
  main: "#F17D1E",
  mainLight: "#FAD0AD",
  mainLightest: "#FFF3E1",

  // Basic colors
  black: "#000000",
  white: "#FFFFFF",
  tabBar: "rgba(0, 0, 0, 0.8)", // 80% opacity

  // Grey scale
  greyDark: "#333333",
  grey: "#666666",
  greyLight: "#808080",
  greyLighter: "#B3B3B3",
  greyLightest: "#F2F2F2",

  // Experience bar colors
  experienceBarFill: "#38A617",
  experienceBarUnfill: "#D0F7C4",

  // Streak colors
  // No streak
  streakLessBackground: "#666666",
  // Streak Start
  streak0Background: "#ffc125ff",
  // Streak Lvl 1
  streak1Background: "#FDA312",
  // Streak Lvl 2
  streak2Background: "#FD7B12",
  // Streak Lvl 3
  streak3Background: "#FD5412",
} as const;

// Type pour l'autocomplétion
export type ColorKey = keyof typeof COLORS;
