<script setup lang="ts">
import { ScrollArea } from "@/components/ui/scroll-area";
</script>

<template>
  <ScrollArea>
    <div class="w-full h-full flex flex-col p-5 bg-gray-800">
      <slot />
    </div>
  </ScrollArea>
</template>
