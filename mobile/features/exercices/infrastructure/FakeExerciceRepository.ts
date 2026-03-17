import { ExerciceDefinition } from "@/shared/sport/exercice/ExerciceDefinition";
import { IExerciceRepository } from "../domain/ports/IExerciceRepository";
import data from "../data/fakeExercices.json";

export class FakeExerciceRepository implements IExerciceRepository {
  async getAll(): Promise<ExerciceDefinition[]> {
    return data as ExerciceDefinition[];
  }
}
