<template>
  <div>
    <header>
      <span class="cross">✝</span>
      <h1>Bíblia Católica em 1 Ano</h1>
      <p class="header-sub">Novo Testamento primeiro</p>
      <div class="stats">
        <div class="stat"><span class="stat-n">73</span><span class="stat-l">Livros</span></div>
        <div class="stat"><span class="stat-n">1.334</span><span class="stat-l">Capítulos</span></div>
        <div class="stat"><span class="stat-n">~4</span><span class="stat-l">Caps/dia</span></div>
        <div class="stat"><span class="stat-n">365</span><span class="stat-l">Dias</span></div>
        <div class="stat"><span class="stat-n">12</span><span class="stat-l">Meses</span></div>
      </div>
    </header>

    <div class="method-box">
      <div class="method-icon">📖</div>
      <div>
        <p class="method-title">Orientação de leitura</p>
        <p class="method-text">
          <strong>Comece pelo Novo Testamento.</strong> Cristo é a chave de interpretação de toda a
          Bíblia — conhecê-Lo primeiro ilumina o Antigo Testamento. Leia sempre com o olhar e a
          Tradição da Igreja, não isoladamente. Após dominar o NT, o AT revela toda a sua
          profundidade profética e tipológica.
        </p>
      </div>
    </div>

    <div class="overall-bar-wrap">
      <div class="bar-label">
        <span>Progresso geral</span><span class="bar-pct">{{ overallPct }}%</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" :style="{ width: overallPct + '%' }" />
      </div>
    </div>

    <div>
      <MonthAccordion
        v-for="m in PLAN"
        :key="m.mes"
        :mes="m"
        :done="done"
        @toggle="toggleBook"
      />
    </div>

    <div class="actions">
      <button class="reset-btn" @click="resetAll">↺ Reiniciar progresso</button>
    </div>

    <footer>"Ignorar as Escrituras é ignorar o próprio Cristo." — São Jerônimo</footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { PLAN, TOTAL_CAPS, allLivros } from '@/data/biblePlan'
import MonthAccordion from './MonthAccordion.vue'

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
  PLAN.flatMap(allLivros)
    .filter((l) => done.value.includes(l.abrev))
    .reduce((s, l) => s + l.caps, 0),
)

const overallPct = computed(() => Math.round((capsConcluidos.value / TOTAL_CAPS) * 100))

function resetAll() {
  if (confirm('Reiniciar todo o progresso?')) {
    done.value = []
    save()
  }
}
</script>
