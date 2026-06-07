import type { Mes, Grupo, Livro } from '../data/biblePlan'

export const PLAN_ES: Mes[] = [
  {
    mes: 1,
    label: 'Mes I',
    nome: 'Nuevo Testamento, Parte I',
    subtitulo: 'Los Evangelios y Hechos, empieza aquí',
    desc: 'La tradición recomienda comenzar por los Evangelios. La secuencia sugerida es Juan, Marcos, Lucas, Hechos y Mateo, del más teológico al más histórico.',
    caps_total: 117,
    dias: 30,
    featured: true,
    grupos: [
      {
        label: 'Evangelios en orden recomendado',
        livros: [
          { nome: 'Evangelio de Juan', abrev: 'Jn', caps: 21 },
          { nome: 'Evangelio de Marcos', abrev: 'Mc', caps: 16 },
          { nome: 'Evangelio de Lucas', abrev: 'Lc', caps: 24 },
          { nome: 'Hechos de los Apóstoles', abrev: 'Hch', caps: 28 },
          { nome: 'Evangelio de Mateo', abrev: 'Mt', caps: 28 },
        ],
      },
    ],
  },
  {
    mes: 2,
    label: 'Mes II',
    nome: 'Nuevo Testamento, Parte II',
    subtitulo: 'Las Cartas y el Apocalipsis',
    desc: 'Primero las cartas cortas de Pablo (más accesibles), luego Romanos y Corintios, y finalmente Hebreos, las cartas católicas y el Apocalipsis.',
    caps_total: 143,
    dias: 30,
    featured: true,
    grupos: [
      {
        label: 'Cartas cortas de Pablo',
        livros: [
          { nome: 'Gálatas', abrev: 'Gál', caps: 6 },
          { nome: 'Efesios', abrev: 'Ef', caps: 6 },
          { nome: 'Filipenses', abrev: 'Flp', caps: 4 },
          { nome: 'Colosenses', abrev: 'Col', caps: 4 },
          { nome: '1 Tesalonicenses', abrev: '1 Tes', caps: 5 },
          { nome: '2 Tesalonicenses', abrev: '2 Tes', caps: 3 },
          { nome: '1 Timoteo', abrev: '1 Tim', caps: 6 },
          { nome: '2 Timoteo', abrev: '2 Tim', caps: 4 },
          { nome: 'Tito', abrev: 'Tit', caps: 3 },
          { nome: 'Filemón', abrev: 'Flm', caps: 1 },
        ],
      },
      {
        label: 'Cartas mayores de Pablo',
        livros: [
          { nome: 'Romanos', abrev: 'Rom', caps: 16 },
          { nome: '1 Corintios', abrev: '1 Cor', caps: 16 },
          { nome: '2 Corintios', abrev: '2 Cor', caps: 13 },
        ],
      },
      {
        label: 'Cartas católicas y Apocalipsis',
        livros: [
          { nome: 'Hebreos', abrev: 'Heb', caps: 13 },
          { nome: 'Santiago', abrev: 'Stg', caps: 5 },
          { nome: '1 Pedro', abrev: '1 Pe', caps: 5 },
          { nome: '2 Pedro', abrev: '2 Pe', caps: 3 },
          { nome: '1 Juan', abrev: '1 Jn', caps: 5 },
          { nome: '2 Juan', abrev: '2 Jn', caps: 1 },
          { nome: '3 Juan', abrev: '3 Jn', caps: 1 },
          { nome: 'Judas', abrev: 'Jds', caps: 1 },
          { nome: 'Apocalipsis', abrev: 'Ap', caps: 22 },
        ],
      },
    ],
  },
  {
    mes: 3,
    label: 'Mes III',
    nome: 'Pentateuco I',
    subtitulo: 'La Creación, el Éxodo y la Ley',
    desc: 'Leídos después de Cristo, Génesis y Éxodo revelan los tipos y prefiguraciones que se cumplen en el NT. Levítico apunta al sacerdocio de Cristo.',
    caps_total: 117,
    dias: 30,
    grupos: [
      {
        label: 'Los cinco libros de Moisés, parte I',
        livros: [
          { nome: 'Génesis', abrev: 'Gn', caps: 50 },
          { nome: 'Éxodo', abrev: 'Ex', caps: 40 },
          { nome: 'Levítico', abrev: 'Lv', caps: 27 },
        ],
      },
    ],
  },
  {
    mes: 4,
    label: 'Mes IV',
    nome: 'Pentateuco II + Históricos I',
    subtitulo: 'El Desierto, la Conquista y los Jueces',
    desc: 'Números y Deuteronomio encierran el camino por el desierto. Josué y Jueces narran la entrada y los ciclos en la Tierra Prometida.',
    caps_total: 115,
    dias: 30,
    grupos: [
      {
        label: 'Fin del Pentateuco',
        livros: [
          { nome: 'Números', abrev: 'Nm', caps: 36 },
          { nome: 'Deuteronomio', abrev: 'Dt', caps: 34 },
        ],
      },
      {
        label: 'Entrada a la Tierra Prometida',
        livros: [
          { nome: 'Josué', abrev: 'Jos', caps: 24 },
          { nome: 'Jueces', abrev: 'Jue', caps: 21 },
        ],
      },
    ],
  },
  {
    mes: 5,
    label: 'Mes V',
    nome: 'Libros Históricos II',
    subtitulo: 'Rut, Samuel y los Reyes',
    desc: 'De Rut a la división del reino: David como tipo de Cristo, Salomón y la sabiduría, y el inicio de la decadencia que llevará al exilio.',
    caps_total: 106,
    dias: 30,
    grupos: [
      {
        label: 'Rut y la Monarquía',
        livros: [
          { nome: 'Rut', abrev: 'Rt', caps: 4 },
          { nome: '1 Samuel', abrev: '1 Sam', caps: 31 },
          { nome: '2 Samuel', abrev: '2 Sam', caps: 24 },
          { nome: '1 Reyes', abrev: '1 Re', caps: 22 },
          { nome: '2 Reyes', abrev: '2 Re', caps: 25 },
        ],
      },
    ],
  },
  {
    mes: 6,
    label: 'Mes VI',
    nome: 'Libros Históricos III',
    subtitulo: 'Crónicas, el Retorno y Deuterocanónicos I',
    desc: 'La relectura teológica de la monarquía en Crónicas, el retorno del exilio en Esdras y Nehemías, y los primeros libros deuterocanónicos: Tobías y Judit.',
    caps_total: 118,
    dias: 30,
    grupos: [
      {
        label: 'Crónicas y Retorno del Exilio',
        livros: [
          { nome: '1 Crónicas', abrev: '1 Cr', caps: 29 },
          { nome: '2 Crónicas', abrev: '2 Cr', caps: 36 },
          { nome: 'Esdras', abrev: 'Esd', caps: 10 },
          { nome: 'Nehemías', abrev: 'Neh', caps: 13 },
        ],
      },
      {
        label: 'Deuterocanónicos',
        livros: [
          { nome: 'Tobías', abrev: 'Tob', caps: 14 },
          { nome: 'Judit', abrev: 'Jdt', caps: 16 },
        ],
      },
    ],
  },
  {
    mes: 7,
    label: 'Mes VII',
    nome: 'Libros Históricos IV + Job',
    subtitulo: 'Ester, Macabeos y el Sufrimiento Justo',
    desc: 'Ester y los Macabeos completan los libros históricos. Job, leído después del NT, gana nueva profundidad: el sufrimiento del justo prefigura a Cristo mismo.',
    caps_total: 89,
    dias: 30,
    grupos: [
      {
        label: 'Deuterocanónicos, continuación',
        livros: [
          { nome: 'Ester', abrev: 'Est', caps: 16 },
          { nome: '1 Macabeos', abrev: '1 Mac', caps: 16 },
          { nome: '2 Macabeos', abrev: '2 Mac', caps: 15 },
        ],
      },
      {
        label: 'El Libro de Job',
        livros: [{ nome: 'Job', abrev: 'Job', caps: 42 }],
      },
    ],
  },
  {
    mes: 8,
    label: 'Mes VIII',
    nome: 'Salmos I + Proverbios',
    subtitulo: 'La Oración y la Sabiduría Práctica',
    desc: 'Los primeros 75 Salmos, el libro de oración de Israel y de la Iglesia. Proverbios complementa con la sabiduría práctica de la vida a la luz de Dios.',
    caps_total: 106,
    dias: 30,
    grupos: [
      {
        label: 'Salmos 1–75',
        livros: [{ nome: 'Salmos 1–75', abrev: 'Sal1', caps: 75 }],
      },
      {
        label: 'Sabiduría práctica',
        livros: [{ nome: 'Proverbios', abrev: 'Prov', caps: 31 }],
      },
    ],
  },
  {
    mes: 9,
    label: 'Mes IX',
    nome: 'Salmos II + Sapienciales',
    subtitulo: 'El Amor, el Vacío y la Sabiduría Divina',
    desc: 'La conclusión de los Salmos, la reflexión sobre la vanidad en Eclesiastés, el amor esponsal en el Cantar (figura de Cristo y la Iglesia) y la Sabiduría.',
    caps_total: 114,
    dias: 30,
    grupos: [
      {
        label: 'Salmos 76–150',
        livros: [{ nome: 'Salmos 76–150', abrev: 'Sal2', caps: 75 }],
      },
      {
        label: 'Libros Sapienciales',
        livros: [
          { nome: 'Eclesiastés', abrev: 'Ecl', caps: 12 },
          { nome: 'Cantar de los Cantares', abrev: 'Cant', caps: 8 },
          { nome: 'Sabiduría', abrev: 'Sab', caps: 19 },
        ],
      },
    ],
  },
  {
    mes: 10,
    label: 'Mes X',
    nome: 'Sirácida e Isaías',
    subtitulo: 'La Sabiduría y el Gran Profeta',
    desc: "Sirácida (Eclesiástico) cierra los sapienciales con consejos prácticos de fe. Isaías, el 'quinto Evangelio', anuncia al Siervo Sufriente y la Nueva Alianza.",
    caps_total: 117,
    dias: 30,
    grupos: [
      {
        label: 'Sapiencial Deuterocanónico',
        livros: [{ nome: 'Sirácida (Eclesiástico)', abrev: 'Sir', caps: 51 }],
      },
      {
        label: 'El Gran Profeta',
        livros: [{ nome: 'Isaías', abrev: 'Is', caps: 66 }],
      },
    ],
  },
  {
    mes: 11,
    label: 'Mes XI',
    nome: 'Profetas Mayores',
    subtitulo: 'El Exilio y la Esperanza',
    desc: 'Jeremías, Lamentaciones, Baruc y Ezequiel: el dolor del exilio, el llanto sobre Jerusalén y las grandes visiones de la restauración de Israel, todo iluminado por el NT.',
    caps_total: 111,
    dias: 30,
    grupos: [
      {
        label: 'Profetas del Exilio',
        livros: [
          { nome: 'Jeremías', abrev: 'Jer', caps: 52 },
          { nome: 'Lamentaciones', abrev: 'Lam', caps: 5 },
          { nome: 'Baruc', abrev: 'Bar', caps: 6 },
          { nome: 'Ezequiel', abrev: 'Ez', caps: 48 },
        ],
      },
    ],
  },
  {
    mes: 12,
    label: 'Mes XII',
    nome: 'Daniel y Profetas Menores',
    subtitulo: 'La Promesa Cumplida, el Gran Final',
    desc: 'Daniel y sus 12 profetas menores: cada promesa, cada imagen, cada llamado a la conversión resuena en el Cristo que conociste en el Mes I. La Biblia se cierra.',
    caps_total: 81,
    dias: 30,
    grupos: [
      {
        label: 'Daniel',
        livros: [{ nome: 'Daniel', abrev: 'Dan', caps: 14 }],
      },
      {
        label: 'Los Doce Profetas Menores',
        livros: [
          { nome: 'Oseas', abrev: 'Os', caps: 14 },
          { nome: 'Joel', abrev: 'Jl', caps: 3 },
          { nome: 'Amós', abrev: 'Am', caps: 9 },
          { nome: 'Abdías', abrev: 'Abd', caps: 1 },
          { nome: 'Jonás', abrev: 'Jon', caps: 4 },
          { nome: 'Miqueas', abrev: 'Miq', caps: 7 },
          { nome: 'Nahúm', abrev: 'Nah', caps: 3 },
          { nome: 'Habacuc', abrev: 'Hab', caps: 3 },
          { nome: 'Sofonías', abrev: 'Sof', caps: 3 },
          { nome: 'Hageo', abrev: 'Hag', caps: 2 },
          { nome: 'Zacarías', abrev: 'Zac', caps: 14 },
          { nome: 'Malaquías', abrev: 'Mal', caps: 4 },
        ],
      },
    ],
  },
]
