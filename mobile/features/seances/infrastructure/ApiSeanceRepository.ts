import { JOURS } from "@/constants/JOURS";
import { Seance } from "@/shared/sport/seance/Seance";
import { CreateSeanceDTO, ISeanceRepository } from "../domain/ports/ISeanceRepository";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? "";

export class ApiSeanceRepository implements ISeanceRepository {
  async getAll(userId: number): Promise<Seance[]> {
    const res = await fetch(`${BASE_URL}/seances?userId=${userId}`);
    const data = await res.json();
    return data.map(
      (s: { seance_id: number; user_id: number; titre: string; jours: string[]; heures: string[] }) =>
        new Seance(s.seance_id, s.user_id, s.titre, s.jours as JOURS[], s.heures)
    );
  }

  async creer(data: CreateSeanceDTO): Promise<Seance> {
    const res = await fetch(`${BASE_URL}/seances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const s = await res.json();
    return new Seance(s.seance_id, s.user_id, s.titre, s.jours as JOURS[], s.heures);
  }
}
