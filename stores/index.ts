import type { Instant } from "@/entities/Instant";

export function useStore() {
  const loading = useState<boolean>("loading", () => false);
  const instants = useState<Instant[]>("instants", () => []);

  return {
    loading,
    instants,
  };
}
