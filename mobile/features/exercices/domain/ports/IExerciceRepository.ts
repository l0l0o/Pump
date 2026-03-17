import { ExerciceDefinition } from "@/shared/sport/exercice/ExerciceDefinition";

export interface IExerciceRepository {
  getAll(): Promise<ExerciceDefinition[]>;
}
