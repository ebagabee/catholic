export interface Oracao {
  titulo: string
  texto: string
}

type OracaoKey =
  | 'sinal'
  | 'oferecimento'
  | 'credo'
  | 'paiNosso'
  | 'aveMaria'
  | 'gloria'
  | 'fatima'
  | 'salveRainha'

export const ORACOES: Record<OracaoKey, Oracao> = {
  sinal: {
    titulo: 'Sinal da Cruz',
    texto: 'Em nome do Pai, e do Filho, e do Espírito Santo. Amém.',
  },
  oferecimento: {
    titulo: 'Oferecimento do Terço',
    texto:
      'Divino Jesus,\n\nnós Vos oferecemos este terço que vamos rezar,\nmeditando nos mistérios da Vossa Redenção.\n\nConcedei-nos, por intercessão da Virgem Maria,\nMãe de Deus e nossa Mãe,\nas virtudes que nos são necessárias para bem rezá-lo e\na graça de ganharmos as indulgências desta santa devoção.',
  },
  credo: {
    titulo: 'Creio (Símbolo dos Apóstolos)',
    texto:
      'Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu único Filho, Nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos; foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai todo-poderoso, de onde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; na Santa Igreja Católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém.',
  },
  paiNosso: {
    titulo: 'Pai Nosso',
    texto:
      'Pai nosso que estais no céu, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação; mas livrai-nos do mal. Amém.',
  },
  aveMaria: {
    titulo: 'Ave Maria',
    texto:
      'Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém.',
  },
  gloria: {
    titulo: 'Glória ao Pai',
    texto:
      'Glória ao Pai e ao Filho e ao Espírito Santo. Como era, no princípio, agora e sempre.',
  },
  fatima: {
    titulo: 'Oração de Fátima',
    texto:
      'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente aquelas que mais precisarem.',
  },
  salveRainha: {
    titulo: 'Salve Rainha',
    texto:
      'Salve Rainha, Mãe de Misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; e depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce Virgem Maria! Rogai por nós, santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.',
  },
}

export interface Misterio {
  key: string
  nome: string
  icon: string
  dias: string
  diasN: number[]
  lista: string[]
}

export const MISTERIOS: Misterio[] = [
  {
    key: 'gozosos',
    nome: 'Mistérios Gozosos',
    icon: '🌸',
    dias: 'Segunda-feira e Sábado',
    diasN: [1, 6],
    lista: [
      'A Anunciação do Anjo Gabriel a Maria',
      'A Visitação de Nossa Senhora a Santa Isabel',
      'O Nascimento de Jesus em Belém',
      'A Apresentação de Jesus no Templo',
      'O Encontro de Jesus no Templo aos Doze Anos',
    ],
  },
  {
    key: 'luminosos',
    nome: 'Mistérios Luminosos',
    icon: '✨',
    dias: 'Quinta-feira',
    diasN: [4],
    lista: [
      'O Batismo de Jesus no Jordão',
      'As Bodas de Caná',
      'O Anúncio do Reino de Deus e o Chamado à Conversão',
      'A Transfiguração de Jesus no Monte Tabor',
      'A Instituição da Eucaristia',
    ],
  },
  {
    key: 'dolorosos',
    nome: 'Mistérios Dolorosos',
    icon: '🕊️',
    dias: 'Terça-feira e Sexta-feira',
    diasN: [2, 5],
    lista: [
      'A Agonia de Jesus no Horto das Oliveiras',
      'A Flagelação de Jesus à Coluna',
      'A Coroação de Espinhos',
      'Jesus Carrega a Cruz até o Calvário',
      'A Crucificação e Morte de Jesus',
    ],
  },
  {
    key: 'gloriosos',
    nome: 'Mistérios Gloriosos',
    icon: '👑',
    dias: 'Quarta-feira e Domingo',
    diasN: [0, 3],
    lista: [
      'A Ressurreição de Jesus Cristo',
      'A Ascensão de Jesus ao Céu',
      'A Descida do Espírito Santo sobre os Apóstolos',
      'A Assunção de Nossa Senhora ao Céu',
      'A Coroação de Nossa Senhora como Rainha do Céu e da Terra',
    ],
  },
]

export type Step =
  | { type: 'prayer'; titulo: string; subtitulo: string; texto: string }
  | { type: 'beads'; titulo: string; subtitulo: string; texto: string; count: number }
  | { type: 'mystery'; titulo: string; subtitulo: string; num: string; texto: string }
  | { type: 'finish'; titulo: string; subtitulo: string }

const ORDINAIS = ['1º', '2º', '3º', '4º', '5º']

export function buildSequence(key: string): Step[] {
  const m = MISTERIOS.find((x) => x.key === key)
  if (!m) return []
  const steps: Step[] = []

  // ABERTURA
  steps.push({
    type: 'prayer',
    titulo: ORACOES.sinal.titulo,
    subtitulo: 'Início do Terço',
    texto: ORACOES.sinal.texto,
  })
  steps.push({
    type: 'prayer',
    titulo: ORACOES.oferecimento.titulo,
    subtitulo: 'Oferecimento das orações',
    texto: ORACOES.oferecimento.texto,
  })
  steps.push({
    type: 'prayer',
    titulo: ORACOES.credo.titulo,
    subtitulo: 'Profissão de fé',
    texto: ORACOES.credo.texto,
  })
  steps.push({
    type: 'prayer',
    titulo: ORACOES.paiNosso.titulo,
    subtitulo: 'Pelas intenções do Santo Padre',
    texto: ORACOES.paiNosso.texto,
  })
  steps.push({
    type: 'prayer',
    titulo: ORACOES.aveMaria.titulo,
    subtitulo: 'Para aumentar a virtude de nossa fé, rezamos...',
    texto: ORACOES.aveMaria.texto,
  })
  steps.push({
    type: 'prayer',
    titulo: ORACOES.aveMaria.titulo,
    subtitulo: 'Para aumentar a virtude da nossa esperança, rezamos...',
    texto: ORACOES.aveMaria.texto,
  })
  steps.push({
    type: 'prayer',
    titulo: ORACOES.aveMaria.titulo,
    subtitulo: 'Para aumentar a virtude da Caridade, rezamos...',
    texto: ORACOES.aveMaria.texto,
  })
  steps.push({
    type: 'prayer',
    titulo: ORACOES.gloria.titulo,
    subtitulo: '',
    texto: ORACOES.gloria.texto,
  })

  // 5 MISTÉRIOS
  m.lista.forEach((misterio, i) => {
    const ordinal = ORDINAIS[i]
    steps.push({
      type: 'mystery',
      titulo: `${ordinal} Mistério`,
      subtitulo: m.nome,
      num: `${ordinal} Mistério ${m.nome}`,
      texto: misterio,
    })
    steps.push({
      type: 'prayer',
      titulo: ORACOES.paiNosso.titulo,
      subtitulo: '',
      texto: ORACOES.paiNosso.texto,
    })
    steps.push({
      type: 'beads',
      titulo: ORACOES.aveMaria.titulo,
      subtitulo: `${ordinal} dezena`,
      count: 10,
      texto: ORACOES.aveMaria.texto,
    })
    steps.push({
      type: 'prayer',
      titulo: ORACOES.gloria.titulo,
      subtitulo: '',
      texto: ORACOES.gloria.texto,
    })
    steps.push({
      type: 'prayer',
      titulo: ORACOES.fatima.titulo,
      subtitulo: 'Oração ensinada em Fátima',
      texto: ORACOES.fatima.texto,
    })
  })

  // ENCERRAMENTO
  steps.push({
    type: 'prayer',
    titulo: ORACOES.salveRainha.titulo,
    subtitulo: 'Conclusão do Terço',
    texto: ORACOES.salveRainha.texto,
  })
  steps.push({
    type: 'prayer',
    titulo: ORACOES.sinal.titulo,
    subtitulo: 'Sinal final',
    texto: ORACOES.sinal.texto,
  })
  steps.push({
    type: 'finish',
    titulo: 'Terço Concluído',
    subtitulo: m.nome,
  })

  return steps
}

export function misterioDoDia(day: number): Misterio | undefined {
  return MISTERIOS.find((m) => m.diasN.includes(day))
}
