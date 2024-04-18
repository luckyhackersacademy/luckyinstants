import type { Instant } from "@/entities/Instant";
import { useStore } from "@/stores";

export function useInstants() {
  const loading = ref<boolean>(false);
  const instants = ref<Instant[]>([]);

  const store = useStore();

  async function fetchInstants() {
    loading.value = true;

    try {
      const response = await $fetch<Instant[]>("/api/instants");

      instants.value = response;
      store.instants.value = response;
    } catch (e) {
      console.log("e", e);
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => {
    fetchInstants();
  });

  return {
    loading,
    instants,
  };
}
