import {
  IProgressionRepository,
  Progression,
} from "../domain/ports/IProgressionRepository";

export async function getProgression(
  repository: IProgressionRepository,
  userId: number
): Promise<Progression> {
  return repository.getParUtilisateur(userId);
}
