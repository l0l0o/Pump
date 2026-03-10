export class Exercice {
  public titre: string;
  public series: number;
  public tempsRepos: number;
  public tempsTravail?: number;
  public repetitions?: number;
  public weight?: number;

  constructor({
    titre,
    series,
    tempsRepos,
    tempsTravail,
    repetitions,
  }: {
    titre: string;
    series: number;
    tempsRepos: number;
    tempsTravail?: number;
    repetitions?: number;
  }) {
    this.validateTitre(titre);
    this.validateSeries(series);
    this.validateRepos(tempsRepos);
    this.defineRepOuTemps(this.repetitions, this.tempsTravail);

    this.titre = titre;
    this.series = series;
    this.tempsRepos = tempsRepos;

    if (repetitions !== undefined) {
      this.validateRepetitions(repetitions);
      this.repetitions = repetitions;
    }
    if (tempsTravail !== undefined) {
      this.validateTempsTravail(tempsTravail);
      this.tempsTravail = tempsTravail;
    }
  }

  private validatePositiveInteger(value: number, fieldName: string): void {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error(`${fieldName} doit être un entier positif.`);
    }
  }

  private validateTitre(titre: string): void {
    if (titre.length === 0) {
      throw new Error("Le titre ne peut pas être vide.");
    }
  }

  private validateSeries(series: number): void {
    this.validatePositiveInteger(series, "Le nombre de séries");
  }

  private validateRepos(repos: number): void {
    this.validatePositiveInteger(repos, "Le temps de repos");
  }

  private validateTempsTravail(tempsTravail: number): void {
    this.validatePositiveInteger(tempsTravail, "Le temps de travail");
  }

  private validateRepetitions(repetitions: number): void {
    this.validatePositiveInteger(repetitions, "Le nombre de répétitions");
  }

  private validatePoids(poids: number): void {
    this.validatePositiveInteger(poids, "Le poids");
  }

  private defineRepOuTemps(repetitions?: number, tempsTravail?: number): void {
    if (repetitions === undefined && tempsTravail === undefined) {
      throw new Error(
        "Veuillez renseigner soit les répétitions, soit le temps de travail."
      );
    }
  }

  public setWeight(poids: number): void {
    this.validatePoids(poids);
    this.weight = poids;
  }

  public removeWeight(): void {
    this.weight = undefined;
  }

  public setRepetitions(repetitions: number): void {
    this.validateRepetitions(repetitions);
    this.repetitions = repetitions;
    this.tempsTravail = undefined;
  }

  public setTempsTravail(tempsTravail: number): void {
    this.validateTempsTravail(tempsTravail);
    this.tempsTravail = tempsTravail;
    this.repetitions = undefined;
  }

  public setSeries(series: number): void {
    this.validateSeries(series);
    this.series = series;
  }

  public setTempsRepos(tempsRepos: number): void {
    this.validateRepos(tempsRepos);
    this.tempsRepos = tempsRepos;
  }

  public setTitre(titre: string): void {
    this.validateTitre(titre);
    this.titre = titre;
  }
}
