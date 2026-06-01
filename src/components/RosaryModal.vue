<template>
  <div
    class="rosary-modal"
    :class="{ open: !!misterioKey }"
    :style="{ '--rosary-scale': rosaryScale }"
    @click.self="close"
  >
    <div class="rosary-stage" v-if="misterio">
      <div class="rosary-scene">
        <!-- TERÇO (moldura ao redor do card) -->
        <svg
          class="rosary-cord"
          viewBox="0 0 640 900"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <!-- cordão: contorna a borda do card -->
          <rect
            class="cord-line"
            :x="FL"
            :y="FT"
            :width="FR - FL"
            :height="FB - FT"
            :rx="CR"
            :ry="CR"
          />
          <path class="cord-line" :d="tailPath" fill="none" />

          <!-- laço: 5 dezenas -->
          <circle
            v-for="b in loopBeads"
            :key="'l' + b.decade + '-' + b.sub"
            :cx="b.x"
            :cy="b.y"
            :r="b.r"
            class="bead-dot"
            :class="[b.kind, loopState(b.decade, b.sub)]"
          />

          <!-- medalha (centro) -->
          <circle :cx="CX" :cy="medalY" r="14" class="bead-medal" :class="medalState" />

          <!-- rabicho: contas iniciais -->
          <circle
            v-for="b in tailBeads"
            :key="b.key"
            :cx="b.x"
            :cy="b.y"
            :r="b.r"
            class="bead-dot"
            :class="[b.kind, tailState(b)]"
          />

          <!-- crucifixo -->
          <g class="crucifix" :class="crucifixState">
            <line :x1="crossX" :y1="crossY - 16" :x2="crossX" :y2="crossY + 16" />
            <line :x1="crossX - 11" :y1="crossY - 3" :x2="crossX + 11" :y2="crossY - 3" />
          </g>
        </svg>

        <div class="rmodal-card">
          <button class="rmodal-close" @click="close">✕</button>

          <div class="rmodal-scroll">
            <p class="rmodal-mystery-name">{{ misterio.icon }} {{ misterio.nome }}</p>
            <p class="rmodal-step-info">Passo {{ index + 1 }} de {{ steps.length }}</p>

            <!-- FINISH -->
            <div v-if="step.type === 'finish'" class="rmodal-finish">
              <span class="rmodal-finish-icon">🌹</span>
              <p class="rmodal-finish-title">{{ step.titulo }}</p>
              <p class="rmodal-finish-text">
                Você concluiu o terço dos {{ step.subtitulo }}. Que Nossa Senhora interceda por
                você.
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
          </div>

          <!-- NAV -->
          <div class="rmodal-nav">
            <button class="rnav-btn rnav-prev" :disabled="index === 0" @click="prev">
              ← Voltar
            </button>
            <button v-if="step.type === 'finish'" class="rnav-btn rnav-next" @click="close">
              Concluir ✓
            </button>
            <button v-else class="rnav-btn rnav-next" @click="next">Avançar →</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { MISTERIOS, buildSequence, type Step } from '@/data/rosary'

const props = defineProps<{ misterioKey: string | null }>()
const emit = defineEmits<{ close: [] }>()

const index = ref(0)
const litCount = ref(0)

const steps = computed<Step[]>(() => (props.misterioKey ? buildSequence(props.misterioKey) : []))
const misterio = computed(() => MISTERIOS.find((m) => m.key === props.misterioKey))
const step = computed<Step>(
  () => steps.value[index.value] ?? { type: 'finish', titulo: '', subtitulo: '' },
)

const stepType = computed(() => {
  switch (step.value.type) {
    case 'mystery':
      return 'Anúncio do Mistério'
    case 'beads':
      return 'Oração repetida'
    case 'intention':
      return 'Intenção Pessoal'
    default:
      return 'Oração'
  }
})

/* ──────────────────────────────────────────────
   GEOMETRIA DO TERÇO (moldura ao redor do card)
   O laço (5 dezenas = 55 contas) acompanha a borda
   do card num retângulo arredondado (sem halo); a
   medalha fica no centro inferior e o rabicho
   (Glória, 3 Ave-Marias, Pai-Nosso e o crucifixo)
   desce abaixo dela.
   ────────────────────────────────────────────── */
// card (px, dentro do palco)
const CARD_L = 50
const CARD_T = 60
const CARD_W = 540
const CARD_H = 700
// moldura de contas: contorno deslocado para fora da borda do card
const OFF = 22
const CR = 34
const FL = CARD_L - OFF
const FT = CARD_T - OFF
const FR = CARD_L + CARD_W + OFF
const FB = CARD_T + CARD_H + OFF
const CX = CARD_L + CARD_W / 2 // centro horizontal
// rabicho "deitado": medalha no centro inferior e o resto drapeado numa curva p/ a direita
const medalY = FB + 18
const ctrlX = 372
const ctrlY = 878
const crossX = 486
const crossY = 868
const tailPath = `M ${CX} ${FB} L ${CX} ${medalY} Q ${ctrlX} ${ctrlY} ${crossX} ${crossY}`

interface LoopBead {
  x: number
  y: number
  r: number
  kind: 'of' | 'hm'
  decade: number
  sub: number // 0 = Pai-Nosso da dezena, 1..10 = Ave-Marias
}

// percorre o retângulo arredondado (linhas + arcos) por comprimento de arco
interface Seg {
  len: number
  at: (t: number) => { x: number; y: number }
}
function lineSeg(x1: number, y1: number, x2: number, y2: number): Seg {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy)
  return { len, at: (t) => ({ x: x1 + (dx * t) / len, y: y1 + (dy * t) / len }) }
}
function arcSeg(cx: number, cy: number, r: number, a0: number, a1: number): Seg {
  const len = (r * Math.abs(a1 - a0) * Math.PI) / 180
  return {
    len,
    at: (t) => {
      const a = ((a0 + ((a1 - a0) * t) / len) * Math.PI) / 180
      return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
    },
  }
}
// começa no centro inferior, sentido horário; termina no centro inferior (lacuna p/ a medalha)
const segs: Seg[] = [
  lineSeg(CX, FB, FL + CR, FB),
  arcSeg(FL + CR, FB - CR, CR, 90, 180),
  lineSeg(FL, FB - CR, FL, FT + CR),
  arcSeg(FL + CR, FT + CR, CR, 180, 270),
  lineSeg(FL + CR, FT, FR - CR, FT),
  arcSeg(FR - CR, FT + CR, CR, 270, 360),
  lineSeg(FR, FT + CR, FR, FB - CR),
  arcSeg(FR - CR, FB - CR, CR, 0, 90),
  lineSeg(FR - CR, FB, CX, FB),
]
const PERIM = segs.reduce((s, seg) => s + seg.len, 0)
function pointAt(d: number) {
  let rem = d
  for (const seg of segs) {
    if (rem <= seg.len) return seg.at(rem)
    rem -= seg.len
  }
  return { x: CX, y: FB }
}

const loopBeads: LoopBead[] = (() => {
  const out: LoopBead[] = []
  const n = 55
  const gap = 90 // lacuna (px) no centro inferior, onde fica a medalha
  const span = PERIM - gap
  for (let i = 0; i < n; i++) {
    const p = pointAt(gap / 2 + (i / (n - 1)) * span)
    const isOF = i % 11 === 0
    out.push({
      x: p.x,
      y: p.y,
      r: isOF ? 10 : 7,
      kind: isOF ? 'of' : 'hm',
      decade: Math.floor(i / 11),
      sub: i % 11,
    })
  }
  return out
})()

interface TailBead {
  key: string
  x: number
  y: number
  r: number
  kind: 'of' | 'hm'
  steps: number[]
  last: number
}

// drapeado em curva da medalha (320,800) p/ o crucifixo (486,868):
// Glória → 3 Ave-Marias → Pai-Nosso, "deitado" e levemente torto
const tailBeads: TailBead[] = [
  { key: 'gloria', x: 339, y: 824, r: 10, kind: 'of', steps: [7], last: 7 },
  { key: 'ave3', x: 363, y: 843, r: 7, kind: 'hm', steps: [6], last: 6 },
  { key: 'ave2', x: 389, y: 857, r: 7, kind: 'hm', steps: [5], last: 5 },
  { key: 'ave1', x: 416, y: 865, r: 7, kind: 'hm', steps: [4], last: 4 },
  { key: 'painosso', x: 447, y: 869, r: 10, kind: 'of', steps: [3], last: 3 },
]

type BeadState = 'done' | 'current' | 'todo'

function loopState(decade: number, sub: number): BeadState {
  const base = 8 + decade * 5
  if (sub === 0) {
    // Pai-Nosso da dezena: anúncio do mistério (base) + Pai-Nosso (base+1)
    if (index.value > base + 1) return 'done'
    if (index.value === base || index.value === base + 1) return 'current'
    return 'todo'
  }
  // Ave-Maria: passo de contas em base+2; Glória/Fátima em base+3 e base+4
  const bs = base + 2
  if (index.value === bs) {
    if (sub <= litCount.value) return 'done'
    if (sub === litCount.value + 1) return 'current'
    return 'todo'
  }
  // durante Glória/Fátima a última conta da dezena fica acesa (estamos no cordão)
  if ((index.value === bs + 1 || index.value === bs + 2) && sub === 10) return 'current'
  if (index.value > bs) return 'done'
  return 'todo'
}

function tailState(b: TailBead): BeadState {
  if (b.steps.includes(index.value)) return 'current'
  if (index.value > b.last) return 'done'
  return 'todo'
}

const crucifixState = computed<BeadState>(() => {
  const i = index.value
  if (i === 0 || i === 1 || i === 2 || i === 35) return 'current' // Sinal inicial e final
  if (i > 2) return 'done'
  return 'todo'
})

const medalState = computed<BeadState>(() => {
  const i = index.value
  if (i === 33 || i === 34) return 'current' // Salve Rainha + agradecimento
  if (i >= 35 || (i >= 8 && i < 33)) return 'done'
  return 'todo'
})

/* escala a cena inteira para caber na viewport (mantém as proporções) */
const winW = ref(typeof window !== 'undefined' ? window.innerWidth : 640)
const winH = ref(typeof window !== 'undefined' ? window.innerHeight : 900)
function onResize() {
  winW.value = window.innerWidth
  winH.value = window.innerHeight
}
onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))
const rosaryScale = computed(() => Math.min(1, (winW.value - 64) / 640, (winH.value - 96) / 900))

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
