<script setup lang="ts">
import { Input } from "@/components/ui/input";

const emit = defineEmits<{
  (e: "search", term: string): void;
}>();

const search = ref<string>("");

const handleSearch = () => {
  emit("search", search.value);
};
</script>

<template>
  <div class="w-full p-5">
    <Input placeholder="Buscar" v-model="search" @keyup.enter="handleSearch" />
  </div>
</template>
