import { rosaryPt } from './rosary.pt'

export default {
  nav: {
    rosary: 'Oração do Santo Terço',
    biblePlan: 'Bíblia Católica em 1 Ano',
    bibleBooks: 'Livros da Bíblia'
  },
  header: {
    settings: 'Configurações',
    language: 'Idioma'
  },
  bibleBooks: {
    title: 'Livros da Bíblia',
    subtitle: 'Coleção completa das Sagradas Escrituras',
    books: 'Livros',
    oldTestament: 'Antigo Testamento',
    oldTestamentMobile: 'Antigo Test.',
    newTestament: 'Novo Testamento',
    newTestamentMobile: 'Novo Test.',
    tabs: {
      all: 'Todos os Livros',
      allMobile: 'Todos',
      at: 'Antigo Testamento',
      nt: 'Novo Testamento'
    },
    categories: {
      all: 'Todos',
      penta: 'Pentateuco',
      hist: 'Históricos',
      sapi: 'Sapienciais',
      prof: 'Proféticos',
      evan: 'Evangelhos',
      cart: 'Cartas',
      apoc: 'Apocalipse'
    },
    chapter: 'capítulo',
    chapters: 'capítulos',
    details: 'Ver detalhes →',
    modal: {
      devTitle: 'Recurso em Desenvolvimento',
      devText: 'Estamos preparando uma experiência completa de leitura e estudo para o livro de',
      devText2: 'Em breve, você poderá ler todos os seus',
      devText3: 'diretamente por aqui, com comentários patrísticos, notas de estudo e marcação de progresso pessoal.',
      quote: '"A leitura das Sagradas Escrituras é o alimento da alma e a luz para os nossos passos rumo ao Reino dos Céus."',
      quoteAuthor: '— Santo Agostinho',
      loaded: 'Capítulos carregados',
      gotIt: 'Entendi'
    }
  },
  lang: {
    pt: 'Português',
    es: 'Espanhol',
    en: 'Inglês'
  },
  rosaryModal: {
    stepInfo: 'Passo {current} de {total}',
    finishText: 'Você concluiu o terço dos {mystery}. Que Nossa Senhora interceda por você.',
    touchBead: 'Toque cada conta ao rezar',
    prev: '← Voltar',
    next: 'Avançar →',
    finishBtn: 'Concluir ✓',
    types: {
      mystery: 'Anúncio do Mistério',
      beads: 'Oração repetida',
      intention: 'Intenção Pessoal',
      prayer: 'Oração'
    }
  },
  biblePlan: {
    title: 'Bíblia Católica em 1 Ano',
    subtitle: 'Novo Testamento primeiro',
    books: 'Livros',
    chapters: 'Capítulos',
    capsPerDay: 'Caps/dia',
    days: 'Dias',
    months: 'Meses',
    guidanceTitle: 'Orientação de leitura',
    guidanceText: '<strong>Comece pelo Novo Testamento.</strong> Cristo é a chave de interpretação de toda a Bíblia, conhecê-lo primeiro ilumina o Antigo Testamento. Leia sempre com o olhar e a Tradição da Igreja, não isoladamente. Após dominar o NT, o AT revela toda a sua profundidade profética e tipológica.',
    overallProgress: 'Progresso geral',
    reset: '↺ Reiniciar progresso',
    resetConfirm: 'Reiniciar todo o progresso?',
    quote: '"Ignorar as Escrituras é ignorar o próprio Cristo." (São Jerônimo)'
  },
  rosary: rosaryPt
}
