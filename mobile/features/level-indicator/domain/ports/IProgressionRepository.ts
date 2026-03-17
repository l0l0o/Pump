export type Progression = {
  username: string;
  streak: number;
};

export interface IProgressionRepository {
  getParUtilisateur(userId: number): Promise<Progression>;
}
