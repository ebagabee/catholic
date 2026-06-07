import type { Mes, Grupo, Livro } from '../data/biblePlan'

export const PLAN_EN: Mes[] = [
  {
    mes: 1,
    label: 'Month I',
    nome: 'New Testament, Part I',
    subtitulo: 'The Gospels and Acts, start here',
    desc: 'Tradition recommends starting with the Gospels. The suggested sequence is John, Mark, Luke, Acts, and Matthew, from the most theological to the most historical.',
    caps_total: 117,
    dias: 30,
    featured: true,
    grupos: [
      {
        label: 'Gospels in recommended order',
        livros: [
          { nome: 'Gospel of John', abrev: 'Jn', caps: 21 },
          { nome: 'Gospel of Mark', abrev: 'Mk', caps: 16 },
          { nome: 'Gospel of Luke', abrev: 'Lk', caps: 24 },
          { nome: 'Acts of the Apostles', abrev: 'Acts', caps: 28 },
          { nome: 'Gospel of Matthew', abrev: 'Mt', caps: 28 },
        ],
      },
    ],
  },
  {
    mes: 2,
    label: 'Month II',
    nome: 'New Testament, Part II',
    subtitulo: 'The Letters and Revelation',
    desc: 'First the short letters of Paul (more accessible), then Romans and Corinthians, and finally Hebrews, the Catholic letters, and Revelation.',
    caps_total: 143,
    dias: 30,
    featured: true,
    grupos: [
      {
        label: 'Short letters of Paul',
        livros: [
          { nome: 'Galatians', abrev: 'Gal', caps: 6 },
          { nome: 'Ephesians', abrev: 'Eph', caps: 6 },
          { nome: 'Philippians', abrev: 'Phil', caps: 4 },
          { nome: 'Colossians', abrev: 'Col', caps: 4 },
          { nome: '1 Thessalonians', abrev: '1 Thes', caps: 5 },
          { nome: '2 Thessalonians', abrev: '2 Thes', caps: 3 },
          { nome: '1 Timothy', abrev: '1 Tim', caps: 6 },
          { nome: '2 Timothy', abrev: '2 Tim', caps: 4 },
          { nome: 'Titus', abrev: 'Tit', caps: 3 },
          { nome: 'Philemon', abrev: 'Phlm', caps: 1 },
        ],
      },
      {
        label: 'Major letters of Paul',
        livros: [
          { nome: 'Romans', abrev: 'Rom', caps: 16 },
          { nome: '1 Corinthians', abrev: '1 Cor', caps: 16 },
          { nome: '2 Corinthians', abrev: '2 Cor', caps: 13 },
        ],
      },
      {
        label: 'Catholic letters and Revelation',
        livros: [
          { nome: 'Hebrews', abrev: 'Heb', caps: 13 },
          { nome: 'James', abrev: 'Jas', caps: 5 },
          { nome: '1 Peter', abrev: '1 Pet', caps: 5 },
          { nome: '2 Peter', abrev: '2 Pet', caps: 3 },
          { nome: '1 John', abrev: '1 Jn', caps: 5 },
          { nome: '2 John', abrev: '2 Jn', caps: 1 },
          { nome: '3 John', abrev: '3 Jn', caps: 1 },
          { nome: 'Jude', abrev: 'Jude', caps: 1 },
          { nome: 'Revelation', abrev: 'Rev', caps: 22 },
        ],
      },
    ],
  },
  {
    mes: 3,
    label: 'Month III',
    nome: 'Pentateuch I',
    subtitulo: 'Creation, Exodus, and the Law',
    desc: 'Read after Christ, Genesis and Exodus reveal the types and prefigurations fulfilled in the NT. Leviticus points to the priesthood of Christ.',
    caps_total: 117,
    dias: 30,
    grupos: [
      {
        label: 'The five books of Moses, part I',
        livros: [
          { nome: 'Genesis', abrev: 'Gen', caps: 50 },
          { nome: 'Exodus', abrev: 'Ex', caps: 40 },
          { nome: 'Leviticus', abrev: 'Lev', caps: 27 },
        ],
      },
    ],
  },
  {
    mes: 4,
    label: 'Month IV',
    nome: 'Pentateuch II + Historical I',
    subtitulo: 'The Desert, the Conquest, and the Judges',
    desc: 'Numbers and Deuteronomy end the journey through the desert. Joshua and Judges narrate the entry and cycles in the Promised Land.',
    caps_total: 115,
    dias: 30,
    grupos: [
      {
        label: 'End of the Pentateuch',
        livros: [
          { nome: 'Numbers', abrev: 'Num', caps: 36 },
          { nome: 'Deuteronomy', abrev: 'Deut', caps: 34 },
        ],
      },
      {
        label: 'Entry into the Promised Land',
        livros: [
          { nome: 'Joshua', abrev: 'Josh', caps: 24 },
          { nome: 'Judges', abrev: 'Judg', caps: 21 },
        ],
      },
    ],
  },
  {
    mes: 5,
    label: 'Month V',
    nome: 'Historical Books II',
    subtitulo: 'Ruth, Samuel, and the Kings',
    desc: 'From Ruth to the division of the kingdom: David as a type of Christ, Solomon and wisdom, and the beginning of the decline leading to exile.',
    caps_total: 106,
    dias: 30,
    grupos: [
      {
        label: 'Ruth and the Monarchy',
        livros: [
          { nome: 'Ruth', abrev: 'Ruth', caps: 4 },
          { nome: '1 Samuel', abrev: '1 Sam', caps: 31 },
          { nome: '2 Samuel', abrev: '2 Sam', caps: 24 },
          { nome: '1 Kings', abrev: '1 Kgs', caps: 22 },
          { nome: '2 Kings', abrev: '2 Kgs', caps: 25 },
        ],
      },
    ],
  },
  {
    mes: 6,
    label: 'Month VI',
    nome: 'Historical Books III',
    subtitulo: 'Chronicles, the Return, and Deuterocanonicals I',
    desc: 'The theological rereading of the monarchy in Chronicles, the return from exile in Ezra and Nehemiah, and the first deuterocanonical books: Tobit and Judith.',
    caps_total: 118,
    dias: 30,
    grupos: [
      {
        label: 'Chronicles and Return from Exile',
        livros: [
          { nome: '1 Chronicles', abrev: '1 Chr', caps: 29 },
          { nome: '2 Chronicles', abrev: '2 Chr', caps: 36 },
          { nome: 'Ezra', abrev: 'Ezra', caps: 10 },
          { nome: 'Nehemiah', abrev: 'Neh', caps: 13 },
        ],
      },
      {
        label: 'Deuterocanonicals',
        livros: [
          { nome: 'Tobit', abrev: 'Tob', caps: 14 },
          { nome: 'Judith', abrev: 'Jdt', caps: 16 },
        ],
      },
    ],
  },
  {
    mes: 7,
    label: 'Month VII',
    nome: 'Historical Books IV + Job',
    subtitulo: 'Esther, Maccabees, and Righteous Suffering',
    desc: 'Esther and the Maccabees complete the historical books. Job, read after the NT, gains new depth: the suffering of the righteous prefigures Christ Himself.',
    caps_total: 89,
    dias: 30,
    grupos: [
      {
        label: 'Deuterocanonicals, continued',
        livros: [
          { nome: 'Esther', abrev: 'Esth', caps: 16 },
          { nome: '1 Maccabees', abrev: '1 Mac', caps: 16 },
          { nome: '2 Maccabees', abrev: '2 Mac', caps: 15 },
        ],
      },
      {
        label: 'The Book of Job',
        livros: [{ nome: 'Job', abrev: 'Job', caps: 42 }],
      },
    ],
  },
  {
    mes: 8,
    label: 'Month VIII',
    nome: 'Psalms I + Proverbs',
    subtitulo: 'Prayer and Practical Wisdom',
    desc: 'The first 75 Psalms, the prayer book of Israel and the Church. Proverbs complements it with the practical wisdom of daily life in the light of God.',
    caps_total: 106,
    dias: 30,
    grupos: [
      {
        label: 'Psalms 1–75',
        livros: [{ nome: 'Psalms 1–75', abrev: 'Ps1', caps: 75 }],
      },
      {
        label: 'Practical wisdom',
        livros: [{ nome: 'Proverbs', abrev: 'Prov', caps: 31 }],
      },
    ],
  },
  {
    mes: 9,
    label: 'Month IX',
    nome: 'Psalms II + Wisdom Books',
    subtitulo: 'Love, Emptiness, and Divine Wisdom',
    desc: 'The conclusion of the Psalms, the reflection on vanity in Ecclesiastes, spousal love in the Song of Songs (a figure of Christ and the Church), and the Wisdom of Solomon.',
    caps_total: 114,
    dias: 30,
    grupos: [
      {
        label: 'Psalms 76–150',
        livros: [{ nome: 'Psalms 76–150', abrev: 'Ps2', caps: 75 }],
      },
      {
        label: 'Wisdom Books',
        livros: [
          { nome: 'Ecclesiastes', abrev: 'Eccl', caps: 12 },
          { nome: 'Song of Songs', abrev: 'Song', caps: 8 },
          { nome: 'Wisdom', abrev: 'Wis', caps: 19 },
        ],
      },
    ],
  },
  {
    mes: 10,
    label: 'Month X',
    nome: 'Sirach and Isaiah',
    subtitulo: 'Wisdom and the Great Prophet',
    desc: "Sirach (Ecclesiasticus) ends the wisdom books with practical advice of faith. Isaiah, the 'fifth Gospel', announces the Suffering Servant and the New Covenant with impressive clarity.",
    caps_total: 117,
    dias: 30,
    grupos: [
      {
        label: 'Deuterocanonical Wisdom',
        livros: [{ nome: 'Sirach (Ecclesiasticus)', abrev: 'Sir', caps: 51 }],
      },
      {
        label: 'The Great Prophet',
        livros: [{ nome: 'Isaiah', abrev: 'Isa', caps: 66 }],
      },
    ],
  },
  {
    mes: 11,
    label: 'Month XI',
    nome: 'Major Prophets',
    subtitulo: 'The Exile and Hope',
    desc: 'Jeremiah, Lamentations, Baruch, and Ezekiel: the pain of exile, weeping over Jerusalem, and the great visions of the restoration of Israel, all illuminated by the NT.',
    caps_total: 111,
    dias: 30,
    grupos: [
      {
        label: 'Prophets of the Exile',
        livros: [
          { nome: 'Jeremiah', abrev: 'Jer', caps: 52 },
          { nome: 'Lamentations', abrev: 'Lam', caps: 5 },
          { nome: 'Baruch', abrev: 'Bar', caps: 6 },
          { nome: 'Ezekiel', abrev: 'Ezek', caps: 48 },
        ],
      },
    ],
  },
  {
    mes: 12,
    label: 'Month XII',
    nome: 'Daniel and Minor Prophets',
    subtitulo: 'The Promise Fulfilled, the Grand Finale',
    desc: 'Daniel and his 12 minor prophets: every promise, every image, every call to conversion echoes in the Christ you met in Month I. The Bible comes full circle.',
    caps_total: 81,
    dias: 30,
    grupos: [
      {
        label: 'Daniel',
        livros: [{ nome: 'Daniel', abrev: 'Dan', caps: 14 }],
      },
      {
        label: 'The Twelve Minor Prophets',
        livros: [
          { nome: 'Hosea', abrev: 'Hos', caps: 14 },
          { nome: 'Joel', abrev: 'Joel', caps: 3 },
          { nome: 'Amos', abrev: 'Amos', caps: 9 },
          { nome: 'Obadiah', abrev: 'Obad', caps: 1 },
          { nome: 'Jonah', abrev: 'Jonah', caps: 4 },
          { nome: 'Micah', abrev: 'Mic', caps: 7 },
          { nome: 'Nahum', abrev: 'Nah', caps: 3 },
          { nome: 'Habakkuk', abrev: 'Hab', caps: 3 },
          { nome: 'Zephaniah', abrev: 'Zeph', caps: 3 },
          { nome: 'Haggai', abrev: 'Hag', caps: 2 },
          { nome: 'Zechariah', abrev: 'Zech', caps: 14 },
          { nome: 'Malachi', abrev: 'Mal', caps: 4 },
        ],
      },
    ],
  },
]
