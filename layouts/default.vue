<script setup lang="ts">
const term = ref<string>("");

const { loading, instants } = useInstantsSearch({
  term,
});

const handleSearch = (q: string) => {
  term.value = q;
  console.log("instants", instants);
  console.log("term", term.value);
};
</script>

<template>
  <div class="flex w-full h-screen">
    <MenuNavigation />

    <div class="flex flex-col w-full">
      <SearchBar @search="handleSearch" />
      <MainContent class="flex-1">
        <slot></slot>
      </MainContent>
    </div>
  </div>
</template>
