import { Seance } from "../seance/Seance";

export class Routine {
  private routine_id: number;
  private user_id: number;
  private seances_list?: Seance[];
  private titre: string;
  private created_at: Date;

  constructor(
    routine_id: number,
    user_id: number,
    titre: string,
    seances_list?: Seance[],
    created_at: Date = new Date()
  ) {
    this.routine_id = routine_id;
    this.user_id = user_id;
    this.titre = titre;
    this.created_at = created_at;

    if (seances_list) {
      this.seances_list = seances_list;
    }
  }

  // Getters
  getRoutineId(): number {
    return this.routine_id;
  }

  getUserId(): number {
    return this.user_id;
  }

  getTitre(): string {
    return this.titre;
  }

  getCreatedAt(): Date {
    return this.created_at;
  }

  getSeances(): Seance[] | undefined {
    return this.seances_list;
  }

  // Setters
  setTitre(titre: string): void {
    this.titre = titre;
  }

  setSeances(seance_list: Seance[]): void {
    this.seances_list = seance_list;
  }
}
