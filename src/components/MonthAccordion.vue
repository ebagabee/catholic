<template>
  <div class="month" :class="{ open: isOpen, featured: mes.featured }">
    <div class="month-head" @click="isOpen = !isOpen">
      <div class="month-left">
        <span class="month-num" :class="`c${mes.mes}`">{{ mes.label }}</span>
        <div class="month-title-wrap">
          <p class="month-title">{{ mes.nome }}</p>
          <p class="month-subtitle">{{ mes.subtitulo }}</p>
        </div>
      </div>
      <div class="month-right">
        <div class="month-progress-ring">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle class="ring-bg" cx="20" cy="20" r="17" />
            <circle
              class="ring-fg"
              :class="`ring${mes.mes}`"
              cx="20"
              cy="20"
              r="17"
              :stroke-dasharray="circ"
              :stroke-dashoffset="circ * (1 - pct)"
            />
          </svg>
          <div class="ring-pct" :class="`c${mes.mes}`">{{ pctR }}%</div>
        </div>
        <span class="chevron">▼</span>
      </div>
    </div>

    <div class="month-body">
      <p class="month-desc">{{ mes.desc }}</p>
      <div class="month-stats">
        <span>📖 {{ mes.caps_total }} capítulos</span>
        <span>📅 {{ mes.dias }} dias</span>
        <span>⏱ ~{{ capsPorDia }} caps/dia</span>
      </div>
      <div class="mini-bar-wrap">
        <div class="mini-bar-track">
          <div class="mini-bar-fill" :class="`mbar${mes.mes}`" :style="{ width: pctR + '%' }" />
        </div>
      </div>

      <div v-for="g in mes.grupos" :key="g.label" class="book-group">
        <p class="group-label">{{ g.label }}</p>
        <div class="book-grid">
          <div
            v-for="l in g.livros"
            :key="l.abrev"
            class="book-item"
            :class="{ done: done.includes(l.abrev) }"
            @click="emit('toggle', l.abrev)"
          >
            <div class="book-check">{{ done.includes(l.abrev) ? '✓' : '' }}</div>
            <div class="book-info">
              <span class="book-name">{{ l.nome }}</span>
              <span class="book-caps">{{ l.caps }} cap.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { allLivros, type Mes } from '@/data/biblePlan'

const props = defineProps<{ mes: Mes; done: string[] }>()
const emit = defineEmits<{ toggle: [abrev: string] }>()

const isOpen = ref(props.mes.mes === 1)

const circ = 2 * Math.PI * 17

const capsConcluidos = computed(() =>
  allLivros(props.mes)
    .filter((l) => props.done.includes(l.abrev))
    .reduce((s, l) => s + l.caps, 0),
)

const pct = computed(() => (props.mes.caps_total > 0 ? capsConcluidos.value / props.mes.caps_total : 0))
const pctR = computed(() => Math.round(pct.value * 100))
const capsPorDia = computed(() => Math.round((props.mes.caps_total / props.mes.dias) * 10) / 10)
</script>
