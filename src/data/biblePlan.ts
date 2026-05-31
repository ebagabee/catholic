export interface Livro {
  nome: string
  abrev: string
  caps: number
}

export interface Grupo {
  label: string
  livros: Livro[]
}

export interface Mes {
  mes: number
  label: string
  nome: string
  subtitulo: string
  desc: string
  caps_total: number
  dias: number
  featured?: boolean
  grupos: Grupo[]
}

export const PLAN: Mes[] = [
  {
    mes: 1,
    label: 'Mês I',
    nome: 'Novo Testamento, Parte I',
    subtitulo: 'Os Evangelhos e Atos, comece aqui',
    desc: 'A tradição recomenda começar pelos Evangelhos. A sequência sugerida é João, Marcos, Lucas, Atos e Mateus, do mais teológico ao mais histórico.',
    caps_total: 117,
    dias: 30,
    featured: true,
    grupos: [
      {
        label: 'Evangelhos na ordem recomendada',
        livros: [
          { nome: 'Evangelho de João', abrev: 'Jo', caps: 21 },
          { nome: 'Evangelho de Marcos', abrev: 'Mc', caps: 16 },
          { nome: 'Evangelho de Lucas', abrev: 'Lc', caps: 24 },
          { nome: 'Atos dos Apóstolos', abrev: 'At', caps: 28 },
          { nome: 'Evangelho de Mateus', abrev: 'Mt', caps: 28 },
        ],
      },
    ],
  },
  {
    mes: 2,
    label: 'Mês II',
    nome: 'Novo Testamento, Parte II',
    subtitulo: 'As Cartas e o Apocalipse',
    desc: 'Primeiro as cartas curtas de Paulo (mais acessíveis), depois Romanos e Coríntios, e por fim Hebreus, as cartas católicas e o Apocalipse.',
    caps_total: 143,
    dias: 30,
    featured: true,
    grupos: [
      {
        label: 'Cartas curtas de Paulo',
        livros: [
          { nome: 'Gálatas', abrev: 'Gl', caps: 6 },
          { nome: 'Efésios', abrev: 'Ef', caps: 6 },
          { nome: 'Filipenses', abrev: 'Fl', caps: 4 },
          { nome: 'Colossenses', abrev: 'Cl', caps: 4 },
          { nome: '1 Tessalonicenses', abrev: '1Ts', caps: 5 },
          { nome: '2 Tessalonicenses', abrev: '2Ts', caps: 3 },
          { nome: '1 Timóteo', abrev: '1Tm', caps: 6 },
          { nome: '2 Timóteo', abrev: '2Tm', caps: 4 },
          { nome: 'Tito', abrev: 'Tt', caps: 3 },
          { nome: 'Filêmon', abrev: 'Fm', caps: 1 },
        ],
      },
      {
        label: 'Cartas maiores de Paulo',
        livros: [
          { nome: 'Romanos', abrev: 'Rm', caps: 16 },
          { nome: '1 Coríntios', abrev: '1Cor', caps: 16 },
          { nome: '2 Coríntios', abrev: '2Cor', caps: 13 },
        ],
      },
      {
        label: 'Cartas católicas e Apocalipse',
        livros: [
          { nome: 'Hebreus', abrev: 'Hb', caps: 13 },
          { nome: 'Tiago', abrev: 'Tg', caps: 5 },
          { nome: '1 Pedro', abrev: '1Pd', caps: 5 },
          { nome: '2 Pedro', abrev: '2Pd', caps: 3 },
          { nome: '1 João', abrev: '1Jo', caps: 5 },
          { nome: '2 João', abrev: '2Jo', caps: 1 },
          { nome: '3 João', abrev: '3Jo', caps: 1 },
          { nome: 'Judas', abrev: 'Jd', caps: 1 },
          { nome: 'Apocalipse', abrev: 'Ap', caps: 22 },
        ],
      },
    ],
  },
  {
    mes: 3,
    label: 'Mês III',
    nome: 'Pentateuco I',
    subtitulo: 'A Criação, o Êxodo e a Lei',
    desc: 'Lidos após Cristo, Gênesis e Êxodo revelam os tipos e prefigurações que se cumprem no NT. Levítico, denso em rituais, aponta para o sacerdócio de Cristo.',
    caps_total: 117,
    dias: 30,
    grupos: [
      {
        label: 'Os cinco livros de Moisés, parte I',
        livros: [
          { nome: 'Gênesis', abrev: 'Gn', caps: 50 },
          { nome: 'Êxodo', abrev: 'Ex', caps: 40 },
          { nome: 'Levítico', abrev: 'Lv', caps: 27 },
        ],
      },
    ],
  },
  {
    mes: 4,
    label: 'Mês IV',
    nome: 'Pentateuco II + Históricos I',
    subtitulo: 'O Deserto, a Conquista e os Juízes',
    desc: 'Números e Deuteronômio encerram a caminhada pelo deserto. Josué e Juízes narram a entrada e os ciclos de infidelidade e misericórdia na Terra Prometida.',
    caps_total: 115,
    dias: 30,
    grupos: [
      {
        label: 'Fim do Pentateuco',
        livros: [
          { nome: 'Números', abrev: 'Nm', caps: 36 },
          { nome: 'Deuteronômio', abrev: 'Dt', caps: 34 },
        ],
      },
      {
        label: 'Entrada na Terra Prometida',
        livros: [
          { nome: 'Josué', abrev: 'Js', caps: 24 },
          { nome: 'Juízes', abrev: 'Jz', caps: 21 },
        ],
      },
    ],
  },
  {
    mes: 5,
    label: 'Mês V',
    nome: 'Livros Históricos II',
    subtitulo: 'Rute, Samuel e os Reis',
    desc: 'De Rute à divisão do reino: Davi como tipo de Cristo, Salomão e a sabedoria, e o início da decadência que levará ao exílio.',
    caps_total: 106,
    dias: 30,
    grupos: [
      {
        label: 'Rute e a Monarquia',
        livros: [
          { nome: 'Rute', abrev: 'Rt', caps: 4 },
          { nome: '1 Samuel', abrev: '1Sm', caps: 31 },
          { nome: '2 Samuel', abrev: '2Sm', caps: 24 },
          { nome: '1 Reis', abrev: '1Rs', caps: 22 },
          { nome: '2 Reis', abrev: '2Rs', caps: 25 },
        ],
      },
    ],
  },
  {
    mes: 6,
    label: 'Mês VI',
    nome: 'Livros Históricos III',
    subtitulo: 'Crônicas, o Retorno e os Deuterocanônicos I',
    desc: 'A releitura teológica da monarquia em Crônicas, o retorno do exílio em Esdras e Neemias, e os primeiros livros deuterocanônicos: Tobias e Judite.',
    caps_total: 118,
    dias: 30,
    grupos: [
      {
        label: 'Crônicas e Retorno do Exílio',
        livros: [
          { nome: '1 Crônicas', abrev: '1Cr', caps: 29 },
          { nome: '2 Crônicas', abrev: '2Cr', caps: 36 },
          { nome: 'Esdras', abrev: 'Esd', caps: 10 },
          { nome: 'Neemias', abrev: 'Ne', caps: 13 },
        ],
      },
      {
        label: 'Deuterocanônicos',
        livros: [
          { nome: 'Tobias', abrev: 'Tb', caps: 14 },
          { nome: 'Judite', abrev: 'Jdt', caps: 16 },
        ],
      },
    ],
  },
  {
    mes: 7,
    label: 'Mês VII',
    nome: 'Livros Históricos IV + Jó',
    subtitulo: 'Ester, Macabeus e o Sofrimento Justo',
    desc: 'Ester e os Macabeus completam os livros históricos. Jó, lido depois do NT, ganha nova profundidade: o sofrimento do justo prefigura o próprio Cristo.',
    caps_total: 89,
    dias: 30,
    grupos: [
      {
        label: 'Deuterocanônicos, continuação',
        livros: [
          { nome: 'Ester', abrev: 'Est', caps: 16 },
          { nome: '1 Macabeus', abrev: '1Mc', caps: 16 },
          { nome: '2 Macabeus', abrev: '2Mc', caps: 15 },
        ],
      },
      {
        label: 'O Livro de Jó',
        livros: [{ nome: 'Jó', abrev: 'Jó', caps: 42 }],
      },
    ],
  },
  {
    mes: 8,
    label: 'Mês VIII',
    nome: 'Salmos I + Provérbios',
    subtitulo: 'A Oração e a Sabedoria Prática',
    desc: 'Os primeiros 75 Salmos, o livro de oração de Israel e da Igreja. Provérbios complementa com a sabedoria prática do cotidiano à luz de Deus.',
    caps_total: 106,
    dias: 30,
    grupos: [
      {
        label: 'Salmos 1–75',
        livros: [{ nome: 'Salmos 1–75', abrev: 'Sl1', caps: 75 }],
      },
      {
        label: 'Sabedoria prática',
        livros: [{ nome: 'Provérbios', abrev: 'Pr', caps: 31 }],
      },
    ],
  },
  {
    mes: 9,
    label: 'Mês IX',
    nome: 'Salmos II + Sapienciais',
    subtitulo: 'O Amor, o Vazio e a Sabedoria Divina',
    desc: 'A conclusão dos Salmos, a reflexão sobre a vaidade em Eclesiastes, o amor esponsal no Cântico (figura da relação de Cristo com a Igreja) e a Sabedoria de Salomão.',
    caps_total: 114,
    dias: 30,
    grupos: [
      {
        label: 'Salmos 76–150',
        livros: [{ nome: 'Salmos 76–150', abrev: 'Sl2', caps: 75 }],
      },
      {
        label: 'Livros Sapienciais',
        livros: [
          { nome: 'Eclesiastes', abrev: 'Ecl', caps: 12 },
          { nome: 'Cântico dos Cânticos', abrev: 'Ct', caps: 8 },
          { nome: 'Sabedoria', abrev: 'Sb', caps: 19 },
        ],
      },
    ],
  },
  {
    mes: 10,
    label: 'Mês X',
    nome: 'Sirácide e Isaías',
    subtitulo: 'A Sabedoria e o Grande Profeta',
    desc: "Sirácide (Eclesiástico) encerra os sapienciais com conselhos práticos de fé. Isaías, o 'quinto Evangelho', anuncia o Servo Sofredor e a Nova Aliança com clareza impressionante.",
    caps_total: 117,
    dias: 30,
    grupos: [
      {
        label: 'Sapiencial Deuterocanônico',
        livros: [{ nome: 'Sirácide (Eclesiástico)', abrev: 'Sir', caps: 51 }],
      },
      {
        label: 'O Grande Profeta',
        livros: [{ nome: 'Isaías', abrev: 'Is', caps: 66 }],
      },
    ],
  },
  {
    mes: 11,
    label: 'Mês XI',
    nome: 'Profetas Maiores',
    subtitulo: 'O Exílio e a Esperança',
    desc: 'Jeremias, Lamentações, Baruc e Ezequiel: a dor do exílio, o choro sobre Jerusalém e as grandes visões da restauração de Israel, tudo iluminado pelo NT que você já leu.',
    caps_total: 111,
    dias: 30,
    grupos: [
      {
        label: 'Profetas do Exílio',
        livros: [
          { nome: 'Jeremias', abrev: 'Jr', caps: 52 },
          { nome: 'Lamentações', abrev: 'Lm', caps: 5 },
          { nome: 'Baruc', abrev: 'Br', caps: 6 },
          { nome: 'Ezequiel', abrev: 'Ez', caps: 48 },
        ],
      },
    ],
  },
  {
    mes: 12,
    label: 'Mês XII',
    nome: 'Daniel e Profetas Menores',
    subtitulo: 'A Promessa Cumprida, o Grande Final',
    desc: 'Daniel e seus 12 profetas menores: cada promessa, cada imagem, cada chamado à conversão ecoa no Cristo que você conheceu no Mês I. A Bíblia se fecha como um círculo.',
    caps_total: 81,
    dias: 30,
    grupos: [
      {
        label: 'Daniel',
        livros: [{ nome: 'Daniel', abrev: 'Dn', caps: 14 }],
      },
      {
        label: 'Os Doze Profetas Menores',
        livros: [
          { nome: 'Oséias', abrev: 'Os', caps: 14 },
          { nome: 'Joel', abrev: 'Jl', caps: 3 },
          { nome: 'Amós', abrev: 'Am', caps: 9 },
          { nome: 'Abdias', abrev: 'Ab', caps: 1 },
          { nome: 'Jonas', abrev: 'Jon', caps: 4 },
          { nome: 'Miquéias', abrev: 'Mq', caps: 7 },
          { nome: 'Naum', abrev: 'Na', caps: 3 },
          { nome: 'Habacuque', abrev: 'Hab', caps: 3 },
          { nome: 'Sofonias', abrev: 'Sf', caps: 3 },
          { nome: 'Ageu', abrev: 'Ag', caps: 2 },
          { nome: 'Zacarias', abrev: 'Zc', caps: 14 },
          { nome: 'Malaquias', abrev: 'Ml', caps: 4 },
        ],
      },
    ],
  },
]

export function allLivros(m: Mes): Livro[] {
  return m.grupos.flatMap((g) => g.livros)
}

export const TOTAL_CAPS = PLAN.reduce((s, m) => s + m.caps_total, 0)
