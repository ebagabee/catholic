<template>
  <button class="theme-toggle" :title="isDark ? 'Modo claro' : 'Modo noturno'" @click="toggleTheme">
    {{ isDark ? '☀️' : '🌙' }}
  </button>

  <div class="wrap">
    <RosarySection @rezar="openRosary" />
    <BiblePlan />
  </div>

  <RosaryModal :misterio-key="rosaryKey" @close="rosaryKey = null" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import RosarySection from '@/components/RosarySection.vue'
import RosaryModal from '@/components/RosaryModal.vue'
import BiblePlan from '@/components/BiblePlan.vue'

const rosaryKey = ref<string | null>(null)
const isDark = ref(true)

function applyTheme(dark: boolean) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
}

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme(isDark.value)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved ? saved === 'dark' : true
  applyTheme(isDark.value)
})

function openRosary(key: string) {
  rosaryKey.value = key
}
</script>
