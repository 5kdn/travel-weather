<script setup lang="ts">
const props = defineProps({
  name: String,
})
</script>

<script lang="ts">
export default {}
</script>

<template>
  <h1>Hello, {{ props.name }}!</h1>
</template>
