import { JOURS } from "@/constants/JOURS";
import { Seance } from "@/shared/sport/seance/Seance";
import { ISeanceRepository } from "../domain/ports/ISeanceRepository";
import data from "../data/fakeSeances.json";

export class FakeSeanceRepository implements ISeanceRepository {
  async getParUtilisateur(_userId: number): Promise<Seance[]> {
    return data.map(
      (s) =>
        new Seance(
          s.seance_id,
          s.user_id,
          s.titre,
          s.jours as JOURS[],
          s.heures
        )
    );
  }
}
