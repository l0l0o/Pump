import { JOURS } from "@/constants/JOURS";
import { Seance } from "@/shared/sport/seance/Seance";
import { CreateSeanceDTO, ISeanceRepository } from "../domain/ports/ISeanceRepository";
import seedData from "@/features/planner/data/fakeSeances.json";

// Store en mémoire partagé entre toutes les instances (module singleton)
const store: Seance[] = seedData.map(
  (s) => new Seance(s.seance_id, s.user_id, s.titre, s.jours as JOURS[], s.heures)
);
let nextId = seedData.length + 1;

export class FakeSeanceRepository implements ISeanceRepository {
  async getAll(userId: number): Promise<Seance[]> {
    return store.filter((s) => s.getUserId() === userId);
  }

  async creer(data: CreateSeanceDTO): Promise<Seance> {
    const seance = new Seance(nextId++, data.userId, data.titre, data.jours, data.heures);
    store.push(seance);
    return seance;
  }
}
