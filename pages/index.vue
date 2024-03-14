<script setup lang="ts">
import type { Instant } from "@/entities/Instant";

useHead({
  title: "Todos os instants",
});

const { play, pause, playing, isAudioPlaying } = useAudioPlayer();
const { data: instants } = await useFetch<Instant[]>("/api/instants");

const handlePlayAndPause = (instant: Instant) => {
  if (isAudioPlaying(instant.id)) {
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
    :is-playing="playing && isAudioPlaying(instant.id)"
    :key="instant.title"
    :id="instant.id"
    :title="instant.title"
    :audio-url="instant.audioUrl"
    @play="handlePlayAndPause"
  />
</template>
