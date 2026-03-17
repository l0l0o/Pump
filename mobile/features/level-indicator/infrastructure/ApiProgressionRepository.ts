import {
  IProgressionRepository,
  Progression,
} from "../domain/ports/IProgressionRepository";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? "";

export class ApiProgressionRepository implements IProgressionRepository {
  async getParUtilisateur(userId: number): Promise<Progression> {
    const res = await fetch(`${BASE_URL}/users/${userId}/progression`);
    return res.json();
  }
}
