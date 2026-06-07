<template>
  <div class="bible-books-view">
    <header class="books-header">
      <span class="cross">✝</span>
      <h1>Livros da Bíblia</h1>
      <p class="header-sub">Coleção completa das Sagradas Escrituras</p>
      
      <div class="stats">
        <div class="stat"><span class="stat-n">73</span><span class="stat-l">Livros</span></div>
        <div class="stat"><span class="stat-n">46</span><span class="stat-l">Antigo Testamento</span></div>
        <div class="stat"><span class="stat-n">27</span><span class="stat-l">Novo Testamento</span></div>
      </div>
    </header>

    <!-- Testamento Toggle -->
    <div class="testament-tabs">
      <button 
        v-for="tab in testamentTabs" 
        :key="tab.value"
        class="testament-btn"
        :class="{ active: selectedTestament === tab.value }"
        @click="selectTestament(tab.value)"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Category Filters -->
    <div class="category-filters">
      <button 
        v-for="cat in filteredCategories" 
        :key="cat"
        class="category-btn"
        :class="{ active: selectedCategory === cat }"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Books Grid -->
    <div class="books-grid">
      <div 
        v-for="book in filteredBooks" 
        :key="book.abrev"
        class="book-card"
        @click="openBookDetails(book)"
      >
        <div class="book-card-header">
          <span class="book-abrev" :class="getCategoryColorClass(book.categoria)">
            {{ book.abrev }}
          </span>
          <span class="book-category-tag">{{ book.categoria }}</span>
        </div>
        <div class="book-card-body">
          <p class="book-title">{{ book.nome }}</p>
          <p class="book-meta">{{ book.caps }} {{ book.caps === 1 ? 'capítulo' : 'capítulos' }}</p>
        </div>
        <div class="book-card-footer">
          <span class="view-more">Ver detalhes →</span>
        </div>
      </div>
    </div>

    <!-- Under Development Modal -->
    <div v-if="activeBook" class="books-modal-backdrop" @click="closeModal">
      <div class="books-modal-content" @click.stop>
        <button class="books-modal-close" @click="closeModal">×</button>
        <div class="books-modal-header">
          <span class="cross">✝</span>
          <h2>{{ activeBook.nome }}</h2>
          <span class="book-modal-tag" :class="getCategoryColorClass(activeBook.categoria)">
            {{ activeBook.categoria }} • {{ activeBook.testamento === 'AT' ? 'Antigo Testamento' : 'Novo Testamento' }}
          </span>
        </div>
        
        <div class="books-modal-body">
          <div class="quote-box">
            <p class="quote-text">
              "A leitura das Sagradas Escrituras é o alimento da alma e a luz para os nossos passos rumo ao Reino dos Céus."
            </p>
            <p class="quote-author">— Santo Agostinho</p>
          </div>

          <div class="dev-info-box">
            <div class="dev-info-icon">⚙️</div>
            <div>
              <p class="dev-info-title">Recurso em Desenvolvimento</p>
              <p class="dev-info-text">
                Estamos preparando uma experiência completa de leitura e estudo para o livro de <strong>{{ activeBook.nome }}</strong>.
                Em breve, você poderá ler todos os seus <strong>{{ activeBook.caps }} capítulos</strong> diretamente por aqui, com comentários patrísticos, notas de estudo e marcação de progresso pessoal.
              </p>
            </div>
          </div>

          <div class="progress-placeholder">
            <div class="placeholder-bar-label">
              <span>Capítulos carregados</span>
              <span>0 / {{ activeBook.caps }} (0%)</span>
            </div>
            <div class="placeholder-bar-track">
              <div class="placeholder-bar-fill"></div>
            </div>
          </div>
        </div>

        <div class="books-modal-footer">
          <button class="books-btn-primary" @click="closeModal">Entendi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Book {
  nome: string
  abrev: string
  caps: number
  testamento: 'AT' | 'NT'
  categoria: string
}

const selectedTestament = ref<'ALL' | 'AT' | 'NT'>('ALL')
const selectedCategory = ref<string>('Todos')
const activeBook = ref<Book | null>(null)

const testamentTabs = [
  { label: 'Todos os Livros', value: 'ALL' as const },
  { label: 'Antigo Testamento', value: 'AT' as const },
  { label: 'Novo Testamento', value: 'NT' as const }
]

const books: Book[] = [
  // Antigo Testamento - Pentateuco
  { nome: 'Gênesis', abrev: 'Gn', caps: 50, testamento: 'AT', categoria: 'Pentateuco' },
  { nome: 'Êxodo', abrev: 'Ex', caps: 40, testamento: 'AT', categoria: 'Pentateuco' },
  { nome: 'Levítico', abrev: 'Lv', caps: 27, testamento: 'AT', categoria: 'Pentateuco' },
  { nome: 'Números', abrev: 'Nm', caps: 36, testamento: 'AT', categoria: 'Pentateuco' },
  { nome: 'Deuteronômio', abrev: 'Dt', caps: 34, testamento: 'AT', categoria: 'Pentateuco' },

  // Antigo Testamento - Históricos
  { nome: 'Josué', abrev: 'Js', caps: 24, testamento: 'AT', categoria: 'Históricos' },
  { nome: 'Juízes', abrev: 'Jz', caps: 21, testamento: 'AT', categoria: 'Históricos' },
  { nome: 'Rute', abrev: 'Rt', caps: 4, testamento: 'AT', categoria: 'Históricos' },
  { nome: '1 Samuel', abrev: '1Sm', caps: 31, testamento: 'AT', categoria: 'Históricos' },
  { nome: '2 Samuel', abrev: '2Sm', caps: 24, testamento: 'AT', categoria: 'Históricos' },
  { nome: '1 Reis', abrev: '1Rs', caps: 22, testamento: 'AT', categoria: 'Históricos' },
  { nome: '2 Reis', abrev: '2Rs', caps: 25, testamento: 'AT', categoria: 'Históricos' },
  { nome: '1 Crônicas', abrev: '1Cr', caps: 29, testamento: 'AT', categoria: 'Históricos' },
  { nome: '2 Crônicas', abrev: '2Cr', caps: 36, testamento: 'AT', categoria: 'Históricos' },
  { nome: 'Esdras', abrev: 'Esd', caps: 10, testamento: 'AT', categoria: 'Históricos' },
  { nome: 'Neemias', abrev: 'Ne', caps: 13, testamento: 'AT', categoria: 'Históricos' },
  { nome: 'Tobias', abrev: 'Tb', caps: 14, testamento: 'AT', categoria: 'Históricos' },
  { nome: 'Judite', abrev: 'Jdt', caps: 16, testamento: 'AT', categoria: 'Históricos' },
  { nome: 'Ester', abrev: 'Est', caps: 16, testamento: 'AT', categoria: 'Históricos' },
  { nome: '1 Macabeus', abrev: '1Mc', caps: 16, testamento: 'AT', categoria: 'Históricos' },
  { nome: '2 Macabeus', abrev: '2Mc', caps: 15, testamento: 'AT', categoria: 'Históricos' },

  // Antigo Testamento - Sapienciais
  { nome: 'Jó', abrev: 'Jó', caps: 42, testamento: 'AT', categoria: 'Sapienciais' },
  { nome: 'Salmos', abrev: 'Sl', caps: 150, testamento: 'AT', categoria: 'Sapienciais' },
  { nome: 'Provérbios', abrev: 'Pr', caps: 31, testamento: 'AT', categoria: 'Sapienciais' },
  { nome: 'Eclesiastes', abrev: 'Ecl', caps: 12, testamento: 'AT', categoria: 'Sapienciais' },
  { nome: 'Cântico dos Cânticos', abrev: 'Ct', caps: 8, testamento: 'AT', categoria: 'Sapienciais' },
  { nome: 'Sabedoria', abrev: 'Sb', caps: 19, testamento: 'AT', categoria: 'Sapienciais' },
  { nome: 'Sirácide (Eclesiástico)', abrev: 'Sir', caps: 51, testamento: 'AT', categoria: 'Sapienciais' },

  // Antigo Testamento - Proféticos
  { nome: 'Isaías', abrev: 'Is', caps: 66, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Jeremias', abrev: 'Jr', caps: 52, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Lamentações', abrev: 'Lm', caps: 5, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Baruc', abrev: 'Br', caps: 6, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Ezequiel', abrev: 'Ez', caps: 48, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Daniel', abrev: 'Dn', caps: 14, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Oseias', abrev: 'Os', caps: 14, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Joel', abrev: 'Jl', caps: 3, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Amós', abrev: 'Am', caps: 9, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Abdias', abrev: 'Ab', caps: 1, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Jonas', abrev: 'Jon', caps: 4, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Miqueias', abrev: 'Mq', caps: 7, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Naum', abrev: 'Na', caps: 3, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Habacuque', abrev: 'Hab', caps: 3, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Sofonias', abrev: 'Sf', caps: 3, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Ageu', abrev: 'Ag', caps: 2, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Zacarias', abrev: 'Zc', caps: 14, testamento: 'AT', categoria: 'Proféticos' },
  { nome: 'Malaquias', abrev: 'Ml', caps: 4, testamento: 'AT', categoria: 'Proféticos' },

  // Novo Testamento - Evangelhos e Atos
  { nome: 'Evangelho de Mateus', abrev: 'Mt', caps: 28, testamento: 'NT', categoria: 'Evangelhos' },
  { nome: 'Evangelho de Marcos', abrev: 'Mc', caps: 16, testamento: 'NT', categoria: 'Evangelhos' },
  { nome: 'Evangelho de Lucas', abrev: 'Lc', caps: 24, testamento: 'NT', categoria: 'Evangelhos' },
  { nome: 'Evangelho de João', abrev: 'Jo', caps: 21, testamento: 'NT', categoria: 'Evangelhos' },
  { nome: 'Atos dos Apóstolos', abrev: 'At', caps: 28, testamento: 'NT', categoria: 'Históricos' },

  // Novo Testamento - Cartas Paulinas
  { nome: 'Romanos', abrev: 'Rm', caps: 16, testamento: 'NT', categoria: 'Cartas' },
  { nome: '1 Coríntios', abrev: '1Cor', caps: 16, testamento: 'NT', categoria: 'Cartas' },
  { nome: '2 Coríntios', abrev: '2Cor', caps: 13, testamento: 'NT', categoria: 'Cartas' },
  { nome: 'Gálatas', abrev: 'Gl', caps: 6, testamento: 'NT', categoria: 'Cartas' },
  { nome: 'Efésios', abrev: 'Ef', caps: 6, testamento: 'NT', categoria: 'Cartas' },
  { nome: 'Filipenses', abrev: 'Fl', caps: 4, testamento: 'NT', categoria: 'Cartas' },
  { nome: 'Colossenses', abrev: 'Cl', caps: 4, testamento: 'NT', categoria: 'Cartas' },
  { nome: '1 Tessalonicenses', abrev: '1Ts', caps: 5, testamento: 'NT', categoria: 'Cartas' },
  { nome: '2 Tessalonicenses', abrev: '2Ts', caps: 3, testamento: 'NT', categoria: 'Cartas' },
  { nome: '1 Timóteo', abrev: '1Tm', caps: 6, testamento: 'NT', categoria: 'Cartas' },
  { nome: '2 Timóteo', abrev: '2Tm', caps: 4, testamento: 'NT', categoria: 'Cartas' },
  { nome: 'Tito', abrev: 'Tt', caps: 3, testamento: 'NT', categoria: 'Cartas' },
  { nome: 'Filêmon', abrev: 'Fm', caps: 1, testamento: 'NT', categoria: 'Cartas' },
  { nome: 'Hebreus', abrev: 'Hb', caps: 13, testamento: 'NT', categoria: 'Cartas' },

  // Novo Testamento - Cartas Católicas
  { nome: 'Tiago', abrev: 'Tg', caps: 5, testamento: 'NT', categoria: 'Cartas' },
  { nome: '1 Pedro', abrev: '1Pd', caps: 5, testamento: 'NT', categoria: 'Cartas' },
  { nome: '2 Pedro', abrev: '2Pd', caps: 3, testamento: 'NT', categoria: 'Cartas' },
  { nome: '1 João', abrev: '1Jo', caps: 5, testamento: 'NT', categoria: 'Cartas' },
  { nome: '2 João', abrev: '2Jo', caps: 1, testamento: 'NT', categoria: 'Cartas' },
  { nome: '3 João', abrev: '3Jo', caps: 1, testamento: 'NT', categoria: 'Cartas' },
  { nome: 'Judas', abrev: 'Jd', caps: 1, testamento: 'NT', categoria: 'Cartas' },

  // Novo Testamento - Apocalipse
  { nome: 'Apocalipse', abrev: 'Ap', caps: 22, testamento: 'NT', categoria: 'Apocalipse' }
]

function selectTestament(val: 'ALL' | 'AT' | 'NT') {
  selectedTestament.value = val
  selectedCategory.value = 'Todos'
}

const filteredCategories = computed(() => {
  const categories = ['Todos']
  if (selectedTestament.value === 'ALL' || selectedTestament.value === 'AT') {
    categories.push('Pentateuco', 'Históricos', 'Sapienciais', 'Proféticos')
  }
  if (selectedTestament.value === 'ALL' || selectedTestament.value === 'NT') {
    if (selectedTestament.value === 'NT') {
      categories.push('Evangelhos', 'Históricos', 'Cartas', 'Apocalipse')
    } else {
      categories.push('Evangelhos', 'Cartas', 'Apocalipse')
    }
  }
  // Deduplicate and clean
  return Array.from(new Set(categories))
})

const filteredBooks = computed(() => {
  return books.filter((b) => {
    // Match Testament
    if (selectedTestament.value !== 'ALL' && b.testamento !== selectedTestament.value) {
      return false
    }
    // Match Category
    if (selectedCategory.value !== 'Todos' && b.categoria !== selectedCategory.value) {
      return false
    }
    return true
  })
})

function getCategoryColorClass(cat: string): string {
  switch (cat) {
    case 'Pentateuco': return 'bc-penta'
    case 'Históricos': return 'bc-hist'
    case 'Sapienciais': return 'bc-sapi'
    case 'Proféticos': return 'bc-prof'
    case 'Evangelhos': return 'bc-evan'
    case 'Cartas': return 'bc-cart'
    case 'Apocalipse': return 'bc-apoc'
    default: return 'bc-default'
  }
}

function openBookDetails(book: Book) {
  activeBook.value = book
}

function closeModal() {
  activeBook.value = null
}
</script>
