import { JOURS } from "@/constants/JOURS";
import { HeureJour } from "../store/draftSeanceStore";
import { CreateSeanceDTO, ISeanceRepository } from "../domain/ports/ISeanceRepository";
import { Seance } from "@/shared/sport/seance/Seance";

export class SeanceValidationError extends Error {}

const JOURS_ORDER: JOURS[] = [
  JOURS.LUN, JOURS.MAR, JOURS.MER, JOURS.JEU,
  JOURS.VEN, JOURS.SAM, JOURS.DIM,
];

export async function creerSeance(
  repository: ISeanceRepository,
  userId: number,
  titre: string,
  jours: JOURS[],
  heures: Partial<Record<JOURS, HeureJour>>
): Promise<Seance> {
  if (!titre.trim()) {
    throw new SeanceValidationError("Le nom de la séance est requis.");
  }
  if (jours.length === 0) {
    throw new SeanceValidationError("Sélectionnez au moins un jour.");
  }

  const joursOrdonnes = JOURS_ORDER.filter((j) => jours.includes(j));

  const heuresFormatees = joursOrdonnes.map((jour) => {
    const h = heures[jour];
    if (!h || h.hh === "" || h.mm === "") {
      throw new SeanceValidationError(`Horaire manquant pour ${jour}.`);
    }
    const hh = parseInt(h.hh, 10);
    const mm = parseInt(h.mm, 10);
    if (isNaN(hh) || hh < 0 || hh > 23) {
      throw new SeanceValidationError(`Heure invalide pour ${jour} (0-23).`);
    }
    if (isNaN(mm) || mm < 0 || mm > 59) {
      throw new SeanceValidationError(`Minutes invalides pour ${jour} (0-59).`);
    }
    return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
  });

  const dto: CreateSeanceDTO = {
    userId,
    titre: titre.trim(),
    jours: joursOrdonnes,
    heures: heuresFormatees,
  };

  return repository.creer(dto);
}
