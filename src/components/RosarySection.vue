<template>
  <div class="rosary-section">
    <div class="rosary-header">
      <p class="rosary-title">🌹 {{ $t('nav.rosary') }}</p>
      <p class="rosary-sub">{{ $t('bibleBooks.subtitle') }}</p> <!-- Reusing subtitle or maybe create a specific one. Actually, let's just leave the translated text or add it to locales -->
      <span class="today-banner">{{ bannerText }}</span>
    </div>

    <div class="mysteries-grid">
      <div
        v-for="m in sortedMisterios"
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
import { useI18n } from 'vue-i18n'
import { getMisterios, misterioDoDia } from '@/data/rosary'

const { t } = useI18n()
const emit = defineEmits<{ rezar: [key: string] }>()

const todayMisterio = computed(() => misterioDoDia(new Date().getDay(), t))

const sortedMisterios = computed(() => {
  const misterios = getMisterios(t)
  if (!todayMisterio.value) return misterios
  return [
    todayMisterio.value,
    ...misterios.filter((m) => m.key !== todayMisterio.value!.key),
  ]
})

const bannerText = computed(() =>
  todayMisterio.value
    ? `${todayMisterio.value.icon}  ${todayMisterio.value.nome}`
    : '✝ Escolha os mistérios do dia'
)
</script>
