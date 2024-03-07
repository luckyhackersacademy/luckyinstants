import type { Instant } from "@/entities/Instant";
import slugify from "slugify";

export function useAudioPlayer() {
  const currentInstant = ref<Instant>();
  const audioRef = ref<HTMLAudioElement | null>(null);

  const isAudioTitlePlaying = (title: string) => {
    if (!currentInstant.value) {
      return false;
    }

    return slugify(title) === slugify(currentInstant.value.title);
  };

  const pause = () => {
    audioRef.value?.pause();
    currentInstant.value = undefined;
  };

  const play = (instant: Instant) => {
    pause();

    currentInstant.value = instant;

    audioRef.value = new Audio(instant.audioUrl);
    audioRef.value.play();
  };

  return { play, pause, isAudioTitlePlaying };
}
