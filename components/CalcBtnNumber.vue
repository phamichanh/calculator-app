<template>
  <v-btn
    :color="bgColor"
    :style="`color: ${txtColor}`"
    width="100"
    height="64"
    class="text-h4 font-weight-bold mb-6"
  >
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
defineProps({
  bgColor: { type: String, default: "hsl(30, 25%, 89%)" },
  txtColor: { type: String, default: "hsl(221, 14%, 31%)" },
});
</script>

<style lang="scss"></style>
