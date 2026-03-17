import { JOURS } from "@/constants/JOURS";
import { Seance } from "@/shared/sport/seance/Seance";
import { ISeanceRepository } from "../domain/ports/ISeanceRepository";

export async function getSeancesDuJour(
  repository: ISeanceRepository,
  userId: number,
  jour: JOURS
): Promise<Seance[]> {
  const toutes = await repository.getParUtilisateur(userId);
  return toutes.filter((s) => s.getJours().includes(jour));
}
