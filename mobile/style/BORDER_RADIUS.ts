export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 20,
  rounded: 50,
} as const;

// Type pour l'autocomplétion
export type BorderRadiusKey = keyof typeof BORDER_RADIUS;
