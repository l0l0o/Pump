export const FONT = {
  family: {
    bold: "InriaSans-Bold",
    boldItalic: "InriaSans-BoldItalic",
    italic: "InriaSans-Italic",
    light: "InriaSans-Light",
    lightItalic: "InriaSans-LightItalic",
    regular: "InriaSans-Regular",
  },
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  },
  weight: {
    light: "300" as const,
    regular: "400" as const,
    bold: "700" as const,
  },
} as const;

// Type pour l'autocomplétion
export type FontFamily = keyof typeof FONT.family;
export type FontSize = keyof typeof FONT.size;
export type FontWeight = keyof typeof FONT.weight;
