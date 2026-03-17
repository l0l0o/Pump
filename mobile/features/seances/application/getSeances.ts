import { Seance } from "@/shared/sport/seance/Seance";
import { ISeanceRepository } from "../domain/ports/ISeanceRepository";

export async function getSeances(
  repository: ISeanceRepository,
  userId: number
): Promise<Seance[]> {
  return repository.getAll(userId);
}
