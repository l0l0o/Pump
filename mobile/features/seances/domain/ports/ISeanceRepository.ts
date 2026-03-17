import { JOURS } from "@/constants/JOURS";
import { Seance } from "@/shared/sport/seance/Seance";

export type CreateSeanceDTO = {
  userId: number;
  titre: string;
  jours: JOURS[];
  heures: string[];
};

export interface ISeanceRepository {
  getAll(userId: number): Promise<Seance[]>;
  creer(data: CreateSeanceDTO): Promise<Seance>;
}
