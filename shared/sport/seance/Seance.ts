import JOURS from "@/constants/JOURS";
import { Exercice } from "../exercice/Exercice";

export class Seance {
  private seance_id: number;
  private user_id: number;
  private titre: string;
  private jours: JOURS[]; // Liste de jours (ex: Lundi,Mercredi,Vendredi)
  private heures: string[]; // Liste d'heures (ex: 09:00,14:00)
  private exercises_list?: Exercice[];
  private created_at: Date;

  constructor(
    seance_id: number,
    user_id: number,
    titre: string,
    jours: JOURS[],
    heures: string[],
    created_at: Date = new Date()
  ) {
    this.seance_id = seance_id;
    this.user_id = user_id;
    this.titre = titre;
    this.jours = jours;
    this.heures = heures;
    this.created_at = created_at;
  }

  // Getters
  getSeanceId(): number {
    return this.seance_id;
  }

  getUserId(): number {
    return this.user_id;
  }

  getExercises(): Exercice[] | undefined {
    return this.exercises_list;
  }

  getTitre(): string {
    return this.titre;
  }

  getJours(): JOURS[] {
    return this.jours;
  }

  getHeures(): string[] {
    return this.heures;
  }

  getCreatedAt(): Date {
    return this.created_at;
  }

  // Setters
  setTitre(titre: string): void {
    this.titre = titre;
  }

  setJours(jours: JOURS[]): void {
    this.jours = jours;
  }

  setHeures(heures: string[]): void {
    this.heures = heures;
  }
}
