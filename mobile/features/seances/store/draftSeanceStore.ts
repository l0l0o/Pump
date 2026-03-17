import { JOURS } from "@/constants/JOURS";
import { ExerciceDefinition } from "@/shared/sport/exercice/ExerciceDefinition";

export type HeureJour = { hh: string; mm: string };

export type DraftSeance = {
  titre: string;
  jours: JOURS[];
  heures: Partial<Record<JOURS, HeureJour>>;
  exercices: ExerciceDefinition[];
};

const defaultState = (): DraftSeance => ({
  titre: "",
  jours: [],
  heures: {},
  exercices: [],
});

let state: DraftSeance = defaultState();
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

export const draftSeanceStore = {
  get(): DraftSeance {
    return state;
  },

  setTitre(titre: string): void {
    state = { ...state, titre };
    notify();
  },

  toggleJour(jour: JOURS): void {
    const exists = state.jours.includes(jour);
    if (exists) {
      const { [jour]: _, ...heuresSansJour } = state.heures;
      state = {
        ...state,
        jours: state.jours.filter((j) => j !== jour),
        heures: heuresSansJour,
      };
    } else {
      state = {
        ...state,
        jours: [...state.jours, jour],
        heures: { ...state.heures, [jour]: { hh: "", mm: "" } },
      };
    }
    notify();
  },

  setHeure(jour: JOURS, hh: string, mm: string): void {
    state = {
      ...state,
      heures: { ...state.heures, [jour]: { hh, mm } },
    };
    notify();
  },

  addExercice(e: ExerciceDefinition): void {
    if (state.exercices.some((ex) => ex.id === e.id)) return;
    state = { ...state, exercices: [...state.exercices, e] };
    notify();
  },

  reset(): void {
    state = defaultState();
    notify();
  },

  subscribe(listener: () => void): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};
