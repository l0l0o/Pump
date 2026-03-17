import { ExerciceDefinition } from "@/shared/sport/exercice/ExerciceDefinition";
import { IExerciceRepository } from "../domain/ports/IExerciceRepository";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? "";

export class ApiExerciceRepository implements IExerciceRepository {
  async getAll(): Promise<ExerciceDefinition[]> {
    const res = await fetch(`${BASE_URL}/exercices`);
    return res.json();
  }
}
