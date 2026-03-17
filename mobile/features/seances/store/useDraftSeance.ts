import { useEffect, useState } from "react";
import { draftSeanceStore, DraftSeance } from "./draftSeanceStore";

export function useDraftSeance(): DraftSeance {
  const [draft, setDraft] = useState<DraftSeance>(() => draftSeanceStore.get());

  useEffect(() => {
    const unsubscribe = draftSeanceStore.subscribe(() => {
      setDraft(draftSeanceStore.get());
    });
    return unsubscribe;
  }, []);

  return draft;
}
