<template>
  <div class="rosary-view">
    <RosarySection @rezar="openRosary" />
    <RosaryModal :misterio-key="rosaryKey" @close="rosaryKey = null" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RosarySection from '@/components/RosarySection.vue'
import RosaryModal from '@/components/RosaryModal.vue'

const rosaryKey = ref<string | null>(null)

function openRosary(key: string) {
  rosaryKey.value = key
}
</script>
