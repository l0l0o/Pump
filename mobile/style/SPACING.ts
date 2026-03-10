export const SPACING = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 10,
  md: 12,
  lg: 20,
} as const;

// Type pour l'autocomplétion
export type SpacingKey = keyof typeof SPACING;
