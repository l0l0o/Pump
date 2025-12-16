export class User {
  private user_id: number;
  private nom_complet: string;
  private taille?: number; // en cm
  private poids?: number; // en kg
  private created_at: Date;

  constructor(
    user_id: number,
    nom_complet: string,
    taille?: number,
    poids?: number,
    created_at: Date = new Date()
  ) {
    this.user_id = user_id;
    this.nom_complet = nom_complet;
    this.taille = taille;
    this.poids = poids;
    this.created_at = created_at;
  }

  // Getters
  getUserId(): number {
    return this.user_id;
  }

  getNomComplet(): string {
    return this.nom_complet;
  }

  getTaille(): number {
    return this.taille!;
  }

  getPoids(): number {
    return this.poids!;
  }

  getCreatedAt(): Date {
    return this.created_at;
  }

  // Setters
  setNomComplet(nom_complet: string): void {
    this.nom_complet = nom_complet;
  }

  setTaille(taille: number): void {
    this.taille = taille;
  }

  setPoids(poids: number): void {
    this.poids = poids;
  }
}
