<script setup lang="ts">
import type { Instant } from "@/entities/Instant";

useHead({
  title: "Todos os instants",
});

const { play, pause, isAudioTitlePlaying } = useAudioPlayer();
const { data: instants } = await useFetch<Instant[]>("/api/instants");

const handlePlayAndPause = (instant: Instant) => {
  if (isAudioTitlePlaying(instant.title)) {
    pause();
    return;
  }

  play(instant);
};
</script>

<template>
  <InstantItem
    v-for="instant in instants"
    class="my-2"
    :is-playing="isAudioTitlePlaying(instant.title)"
    :key="instant.title"
    :title="instant.title"
    :audio-url="instant.audioUrl"
    @play="handlePlayAndPause"
  />
</template>
