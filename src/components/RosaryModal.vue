<template>
  <div class="rosary-modal" :class="{ open: !!misterioKey }" @click.self="close">
    <div class="rmodal-card" v-if="misterio">
      <button class="rmodal-close" @click="close">✕</button>

      <p class="rmodal-mystery-name">{{ misterio.icon }} {{ misterio.nome }}</p>
      <p class="rmodal-step-info">Passo {{ index + 1 }} de {{ steps.length }}</p>

      <div class="rmodal-progress">
        <span
          v-for="(s, i) in steps"
          :key="i"
          class="rprog-dot"
          :class="{ done: i < index, current: i === index }"
        />
      </div>

      <!-- FINISH -->
      <div v-if="step.type === 'finish'" class="rmodal-finish">
        <span class="rmodal-finish-icon">🌹</span>
        <p class="rmodal-finish-title">{{ step.titulo }}</p>
        <p class="rmodal-finish-text">
          Você concluiu o terço dos {{ step.subtitulo }}. Que Nossa Senhora interceda por você.
        </p>
      </div>

      <!-- STEP CONTENT -->
      <template v-else>
        <p class="rmodal-step-type">{{ stepType }}</p>
        <p class="rmodal-step-title">{{ step.titulo }}</p>
        <p v-if="step.subtitulo" class="rmodal-step-sub">{{ step.subtitulo }}</p>

        <!-- MYSTERY ANNOUNCE -->
        <div v-if="step.type === 'mystery'" class="rmodal-mystery-announce">
          <p class="rmodal-mystery-num">{{ step.num }}</p>
          <p class="rmodal-mystery-text">{{ step.texto }}</p>
        </div>

        <!-- PRAYER / BEADS TEXT -->
        <div v-else class="rmodal-prayer-text">{{ step.texto }}</div>

        <!-- BEAD COUNTER -->
        <div v-if="step.type === 'beads'" class="beads-wrap">
          <div class="beads-label">
            <span>Toque cada conta ao rezar</span>
            <span>{{ litCount }} / {{ step.count }}</span>
          </div>
          <div class="beads-row">
            <button
              v-for="n in step.count"
              :key="n"
              class="bead"
              :class="{ lit: n <= litCount }"
              @click="toggleBead(n)"
            >
              {{ n }}
            </button>
          </div>
        </div>
      </template>

      <!-- NAV -->
      <div class="rmodal-nav">
        <button class="rnav-btn rnav-prev" :disabled="index === 0" @click="prev">← Voltar</button>
        <button v-if="step.type === 'finish'" class="rnav-btn rnav-next" @click="close">
          Concluir ✓
        </button>
        <button v-else class="rnav-btn rnav-next" @click="next">Avançar →</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { MISTERIOS, buildSequence, type Step } from '@/data/rosary'

const props = defineProps<{ misterioKey: string | null }>()
const emit = defineEmits<{ close: [] }>()

const index = ref(0)
const litCount = ref(0)

const steps = computed<Step[]>(() => (props.misterioKey ? buildSequence(props.misterioKey) : []))
const misterio = computed(() => MISTERIOS.find((m) => m.key === props.misterioKey))
const step = computed<Step>(() => steps.value[index.value] ?? { type: 'finish', titulo: '', subtitulo: '' })

const stepType = computed(() => {
  switch (step.value.type) {
    case 'mystery':
      return 'Anúncio do Mistério'
    case 'beads':
      return 'Oração repetida'
    default:
      return 'Oração'
  }
})

// reset state whenever a new rosary is opened
watch(
  () => props.misterioKey,
  (key) => {
    if (key) {
      index.value = 0
      litCount.value = 0
    }
  },
)

function toggleBead(n: number) {
  // clicking a lit bead un-lights it (and those after); clicking an unlit one lights up to it
  litCount.value = n === litCount.value ? n - 1 : n
}

function next() {
  if (index.value < steps.value.length - 1) {
    index.value++
    litCount.value = 0
  }
}

function prev() {
  if (index.value > 0) {
    index.value--
    litCount.value = 0
  }
}

function close() {
  emit('close')
}
</script>
