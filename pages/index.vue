<script setup lang="ts">
import { useStore } from "@/stores";
import type { Instant } from "@/entities/Instant";

useHead({
  title: "Todos os instants",
});

const store = useStore();

useInstants();

const { play, pause, playing, isAudioPlaying } = useAudioPlayer();

const instantsFiltered = computed(() => {
  return store.instants.value;
});

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
    v-for="instant in instantsFiltered"
    class="my-2"
    :is-playing="playing && isAudioPlaying(instant.id)"
    :key="instant.title"
    :id="instant.id"
    :title="instant.title"
    :audio-url="instant.audioUrl"
    @play="handlePlayAndPause"
  />
</template>
