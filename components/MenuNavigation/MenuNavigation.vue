<script setup lang="ts">
import { Siren, HandMetal } from "lucide-vue-next";

const { currentInstant, playing, progress, play, pause, isAudioPlaying } =
  useAudioPlayer();
</script>

<template>
  <aside
    class="w-[300px] h-full flex flex-col justify-between gap-4 bg-gray-900"
  >
    <div class="flex flex-col gap-4">
      <div class="p-5">
        <span class="text-gray-200 text-xl font-bold">🍀 Lucky Instants</span>
      </div>

      <div class="flex flex-col">
        <nuxt-link
          class="flex items-center gap-2 text-gray-200 font-regular text-lg px-4 py-3 hover:bg-gray-800"
          to="/"
        >
          <HandMetal class="w-5 h-5" />
          Todos
        </nuxt-link>
        <nuxt-link
          class="flex items-center gap-2 text-gray-200 font-regular text-lg px-4 py-3 hover:bg-gray-800"
          to="/recents"
        >
          <Siren class="w-5 h-5" />
          Recentes
        </nuxt-link>
      </div>
    </div>

    <div
      v-if="currentInstant"
      class="w-full border-solid border-gray-700 border-r-2 bg-gray-800"
    >
      <MiniPlayer
        @play="play"
        @pause="pause"
        :progress="progress"
        :title="currentInstant.title"
        :is-playing="playing"
      />
    </div>
  </aside>
</template>
