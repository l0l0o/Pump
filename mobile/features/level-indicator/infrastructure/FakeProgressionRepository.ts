import {
  IProgressionRepository,
  Progression,
} from "../domain/ports/IProgressionRepository";
import data from "../data/fakeProgression.json";

export class FakeProgressionRepository implements IProgressionRepository {
  async getParUtilisateur(_userId: number): Promise<Progression> {
    return data;
  }
}
