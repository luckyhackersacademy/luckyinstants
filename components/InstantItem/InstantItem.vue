<script setup lang="ts">
import type { Instant } from "~/entities/Instant";
import { Play, Pause } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

const props = defineProps<{
  id: string;
  title: string;
  audioUrl: string;
  isPlaying: boolean;
}>();

const emit = defineEmits<{
  (e: "play", instant: Instant): void;
}>();

const togglePlayPause = () => {
  emit("play", { id: props.id, title: props.title, audioUrl: props.audioUrl });
};
</script>

<template>
  <div class="flex gap-2 items-center">
    <Button
      :class="{
        'animate-pulse': isPlaying,
      }"
      size="icon"
      class="rounded-full flex justify-center items-center"
      @click="togglePlayPause()"
    >
      <Pause v-if="isPlaying" class="w-4 h-4 text-gray-200" />
      <Play v-else class="w-4 h-4 text-gray-200" />
    </Button>
    <p class="text-gray-200">{{ props.title }}</p>
  </div>
</template>
