<template>
  <div>
    <header>
      <span class="cross">✝</span>
      <h1>{{ $t('biblePlan.title') }}</h1>
      <p class="header-sub">{{ $t('biblePlan.subtitle') }}</p>
      <div class="stats plan-stats">
        <div class="stat"><span class="stat-n">73</span><span class="stat-l">{{ $t('biblePlan.books') }}</span></div>
        <div class="stat">
          <span class="stat-n">1.334</span><span class="stat-l">{{ $t('biblePlan.chapters') }}</span>
        </div>
        <div class="stat"><span class="stat-n">~4</span><span class="stat-l">{{ $t('biblePlan.capsPerDay') }}</span></div>
        <div class="stat"><span class="stat-n">365</span><span class="stat-l">{{ $t('biblePlan.days') }}</span></div>
        <div class="stat"><span class="stat-n">12</span><span class="stat-l">{{ $t('biblePlan.months') }}</span></div>
      </div>
    </header>

    <div class="method-box">
      <div class="method-icon">📖</div>
      <div>
        <p class="method-title">{{ $t('biblePlan.guidanceTitle') }}</p>
        <p class="method-text" v-html="$t('biblePlan.guidanceText')"></p>
      </div>
    </div>

    <div class="overall-bar-wrap">
      <div class="bar-label">
        <span>{{ $t('biblePlan.overallProgress') }}</span><span class="bar-pct">{{ overallPct }}%</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" :style="{ width: overallPct + '%' }" />
      </div>
    </div>

    <div>
      <MonthAccordion v-for="m in plan" :key="m.mes" :mes="m" :done="done" @toggle="toggleBook" />
    </div>

    <div class="actions">
      <button class="reset-btn" @click="resetAll">{{ $t('biblePlan.reset') }}</button>
    </div>

    <footer>{{ $t('biblePlan.quote') }}</footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { getPlan, getTotalCaps, allLivros } from '@/data/biblePlan'
import MonthAccordion from './MonthAccordion.vue'

const { t, locale } = useI18n()
const plan = computed(() => getPlan(locale.value))
const totalCaps = computed(() => getTotalCaps(plan.value))

const STORE_KEY = 'biblia_ppr_1ano_v1'

function loadDone(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || '[]') || []
  } catch {
    return []
  }
}

const done = ref<string[]>(loadDone())

function save() {
  localStorage.setItem(STORE_KEY, JSON.stringify(done.value))
}

function toggleBook(abrev: string) {
  const i = done.value.indexOf(abrev)
  if (i === -1) done.value.push(abrev)
  else done.value.splice(i, 1)
  save()
}

const capsConcluidos = computed(() =>
  plan.value.flatMap(allLivros)
    .filter((l) => done.value.includes(l.abrev))
    .reduce((s, l) => s + l.caps, 0),
)

const overallPct = computed(() => Math.round((capsConcluidos.value / totalCaps.value) * 100))

function resetAll() {
  if (confirm(t('biblePlan.resetConfirm'))) {
    done.value = []
    save()
  }
}
</script>
