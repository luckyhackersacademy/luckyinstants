<script setup lang="ts"></script>

<template>
  <div class="flex w-full h-screen">
    <MenuNavigation />
    <MainContent class="flex-1">
      <slot></slot>
    </MainContent>
  </div>
</template>
