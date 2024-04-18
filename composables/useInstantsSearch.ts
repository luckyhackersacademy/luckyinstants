import { useStore } from "@/stores";
import type { Instant } from "@/entities/Instant";

export interface InstantSearch {
  term: Ref<string>;
}

export function useInstantsSearch({ term }: InstantSearch) {
  const loading = ref<boolean>(false);
  const instants = ref<Instant[]>([]);
  const store = useStore();

  async function readAll() {
    loading.value = true;

    try {
      const response = await $fetch<Instant[]>("/api/instants/search", {
        method: "GET",
        params: { q: term.value },
      });

      instants.value = response;
      store.instants.value = response;
    } catch (e) {
      console.log("e", e);
    } finally {
      loading.value = false;
    }
  }

  watchEffect(() => {
    if (!term.value) {
      return;
    }

    readAll();
  });

  return {
    loading,
    instants,
  };
}
