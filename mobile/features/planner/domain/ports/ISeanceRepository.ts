import { Seance } from "@/shared/sport/seance/Seance";

export interface ISeanceRepository {
  getParUtilisateur(userId: number): Promise<Seance[]>;
}
