export type GroupeMusculaire =
  | "pectoraux"
  | "dos"
  | "epaules"
  | "biceps"
  | "triceps"
  | "jambes"
  | "abdominaux"
  | "cardio";

export type FormatExercice = "repetitions" | "duree";

export interface ExerciceDefinition {
  id: number;
  nom: string;
  groupeMusculaire: GroupeMusculaire;
  format: FormatExercice;
  description?: string;
}
