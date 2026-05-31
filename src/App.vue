<template>
  <div class="wrap">
    <RosarySection @rezar="openRosary" />
    <BiblePlan />
  </div>

  <RosaryModal :misterio-key="rosaryKey" @close="rosaryKey = null" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RosarySection from '@/components/RosarySection.vue'
import RosaryModal from '@/components/RosaryModal.vue'
import BiblePlan from '@/components/BiblePlan.vue'

const rosaryKey = ref<string | null>(null)

function openRosary(key: string) {
  rosaryKey.value = key
}
</script>
