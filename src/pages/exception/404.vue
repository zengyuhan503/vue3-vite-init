<template>
  <exception-page home-route="/" :style="`min-height: ${minHeight}`" type="404" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ExceptionPage from "@/components/exception/ExceptionPage";
const minHeight = ref("400px");
</script>
<style scoped lang="less"></style>
