<script setup lang="ts">
import { Play, Pause } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { watchEffect } from "vue";

const props = defineProps<{
  title: string;
  progress: number;
  duration: number;
  isPlaying: boolean;
}>();

const emit = defineEmits<{
  (e: "play"): void;
  (e: "pause"): void;
}>();

const currentProgress = ref<number[]>([props.progress]);

watchEffect(() => {
  currentProgress.value = [props.progress];
});

// @TODO: better duration format
const durationInMinutes = computed(() => {
  return Math.floor(props.duration / 60);
});

const handleToogle = () => {
  if (props.isPlaying) {
    emit("pause");
    return;
  }

  emit("play");
};
</script>

<template>
  <div class="flex flex-col gap-4 p-3">
    <p class="text-xs text-gray-200">Tocando agora:</p>
    <p class="text-gray-200 -mt-4">{{ props.title }}</p>
    <div class="flex gap-2">
      <span>
        <Button
          :class="{
            'animate-pulse': props.isPlaying,
          }"
          size="icon"
          class="rounded-full flex justify-center items-center"
          @click="handleToogle()"
        >
          <Pause v-if="props.isPlaying" class="w-4 h-4 text-gray-200" />
          <Play v-else class="w-4 h-4 text-gray-200" />
        </Button>
      </span>

      <div class="w-full flex justify-center items-center gap-2">
        <span class="text-white text-sm">00:00</span>
        <Slider v-model="currentProgress" :max="100" :step="1" />
        <span class="text-white text-sm">{{ durationInMinutes }}</span>
      </div>
    </div>
  </div>
</template>
