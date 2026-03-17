import { JOURS } from "@/constants/JOURS";
import { Seance } from "@/shared/sport/seance/Seance";
import { ISeanceRepository } from "../domain/ports/ISeanceRepository";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? "";

export class ApiSeanceRepository implements ISeanceRepository {
  async getParUtilisateur(userId: number): Promise<Seance[]> {
    const res = await fetch(`${BASE_URL}/seances?userId=${userId}`);
    const data = await res.json();
    return data.map(
      (s: any) =>
        new Seance(s.seance_id, s.user_id, s.titre, s.jours as JOURS[], s.heures)
    );
  }
}
