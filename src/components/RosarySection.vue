<template>
  <div class="rosary-section">
    <div class="rosary-header">
      <p class="rosary-title">🌹 Santo Terço</p>
      <p class="rosary-sub">Guia completo de oração, escolha os mistérios do dia</p>
      <span class="today-banner">{{ bannerText }}</span>
    </div>

    <div class="mysteries-grid">
      <div
        v-for="m in MISTERIOS"
        :key="m.key"
        class="mystery-card"
        :class="{ 'today-card': todayMisterio?.key === m.key }"
      >
        <span v-if="todayMisterio?.key === m.key" class="today-pill">Hoje</span>
        <span class="mcard-icon">{{ m.icon }}</span>
        <p class="mcard-name">{{ m.nome }}</p>
        <p class="mcard-day">📅 {{ m.dias }}</p>
        <p class="mcard-preview">{{ m.lista[0] }}…</p>
        <button class="mcard-btn" @click="emit('rezar', m.key)">Rezar →</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MISTERIOS, misterioDoDia } from '@/data/rosary'

const emit = defineEmits<{ rezar: [key: string] }>()

const todayMisterio = computed(() => misterioDoDia(new Date().getDay()))

const bannerText = computed(() =>
  todayMisterio.value
    ? `${todayMisterio.value.icon}  Hoje: ${todayMisterio.value.nome}`
    : '✝ Escolha os mistérios do dia',
)
</script>
