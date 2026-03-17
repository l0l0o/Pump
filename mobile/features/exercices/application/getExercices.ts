import { ExerciceDefinition } from "@/shared/sport/exercice/ExerciceDefinition";
import { IExerciceRepository } from "../domain/ports/IExerciceRepository";

export async function getExercices(
  repository: IExerciceRepository
): Promise<ExerciceDefinition[]> {
  return repository.getAll();
}
