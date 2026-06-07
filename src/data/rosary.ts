export interface Misterio {
  key: string
  nome: string
  icon: string
  dias: string
  diasN: number[]
  lista: string[]
}

export function getMisterios(t: any, tm: any): Misterio[] {
  return [
    {
      key: 'gozosos',
      nome: t('rosary.mysteries.gozosos.name'),
      icon: '🌸',
      dias: t('rosary.mysteries.gozosos.days'),
      diasN: [1, 6],
      lista: tm('rosary.mysteries.gozosos.list') as string[],
    },
    {
      key: 'luminosos',
      nome: t('rosary.mysteries.luminosos.name'),
      icon: '✨',
      dias: t('rosary.mysteries.luminosos.days'),
      diasN: [4],
      lista: tm('rosary.mysteries.luminosos.list') as string[],
    },
    {
      key: 'dolorosos',
      nome: t('rosary.mysteries.dolorosos.name'),
      icon: '🕊️',
      dias: t('rosary.mysteries.dolorosos.days'),
      diasN: [2, 5],
      lista: tm('rosary.mysteries.dolorosos.list') as string[],
    },
    {
      key: 'gloriosos',
      nome: t('rosary.mysteries.gloriosos.name'),
      icon: '👑',
      dias: t('rosary.mysteries.gloriosos.days'),
      diasN: [0, 3],
      lista: tm('rosary.mysteries.gloriosos.list') as string[],
    },
  ]
}

export type Step =
  | { type: 'prayer'; titulo: string; subtitulo: string; texto: string }
  | { type: 'intention'; titulo: string; subtitulo: string; texto: string }
  | { type: 'beads'; titulo: string; subtitulo: string; texto: string; count: number }
  | { type: 'mystery'; titulo: string; subtitulo: string; num: string; texto: string }
  | { type: 'finish'; titulo: string; subtitulo: string }

export function buildSequence(key: string, t: any, tm: any): Step[] {
  const MISTERIOS = getMisterios(t, tm)
  const m = MISTERIOS.find((x) => x.key === key)
  if (!m) return []
  const steps: Step[] = []

  const ordinais = tm('rosary.steps.ordinals') as string[]

  // ABERTURA
  steps.push({
    type: 'prayer',
    titulo: t('rosary.prayers.sinal.title'),
    subtitulo: t('rosary.steps.start'),
    texto: t('rosary.prayers.sinal.text'),
  })
  steps.push({
    type: 'prayer',
    titulo: t('rosary.prayers.oferecimento.title'),
    subtitulo: t('rosary.steps.offering'),
    texto: t('rosary.prayers.oferecimento.text'),
  })
  steps.push({
    type: 'intention',
    titulo: t('rosary.steps.intentionTitle'),
    subtitulo: t('rosary.steps.intentionSub'),
    texto: t('rosary.steps.intentionText'),
  })
  steps.push({
    type: 'prayer',
    titulo: t('rosary.prayers.credo.title'),
    subtitulo: t('rosary.steps.creed'),
    texto: t('rosary.prayers.credo.text'),
  })
  steps.push({
    type: 'prayer',
    titulo: t('rosary.prayers.paiNosso.title'),
    subtitulo: t('rosary.steps.pope'),
    texto: t('rosary.prayers.paiNosso.text'),
  })
  steps.push({
    type: 'prayer',
    titulo: t('rosary.prayers.aveMaria.title'),
    subtitulo: t('rosary.steps.faith'),
    texto: t('rosary.prayers.aveMaria.text'),
  })
  steps.push({
    type: 'prayer',
    titulo: t('rosary.prayers.aveMaria.title'),
    subtitulo: t('rosary.steps.hope'),
    texto: t('rosary.prayers.aveMaria.text'),
  })
  steps.push({
    type: 'prayer',
    titulo: t('rosary.prayers.aveMaria.title'),
    subtitulo: t('rosary.steps.charity'),
    texto: t('rosary.prayers.aveMaria.text'),
  })
  steps.push({
    type: 'prayer',
    titulo: t('rosary.prayers.gloria.title'),
    subtitulo: '',
    texto: t('rosary.prayers.gloria.text'),
  })

  // 5 MISTÉRIOS
  m.lista.forEach((misterio, i) => {
    const ordinal = ordinais[i] || `${i + 1}º`
    steps.push({
      type: 'mystery',
      titulo: `${ordinal} ${t('rosary.steps.mysteryPrefix')}`,
      subtitulo: m.nome,
      num: `${ordinal} ${t('rosary.steps.mysteryPrefix')} ${m.nome}`,
      texto: misterio,
    })
    steps.push({
      type: 'prayer',
      titulo: t('rosary.prayers.paiNosso.title'),
      subtitulo: '',
      texto: t('rosary.prayers.paiNosso.text'),
    })
    steps.push({
      type: 'beads',
      titulo: t('rosary.prayers.aveMaria.title'),
      subtitulo: `${ordinal} ${t('rosary.steps.decade')}`,
      count: 10,
      texto: t('rosary.prayers.aveMaria.text'),
    })
    steps.push({
      type: 'prayer',
      titulo: t('rosary.prayers.gloria.title'),
      subtitulo: '',
      texto: t('rosary.prayers.gloria.text'),
    })
    steps.push({
      type: 'prayer',
      titulo: t('rosary.prayers.fatima.title'),
      subtitulo: t('rosary.steps.fatimaSub'),
      texto: t('rosary.prayers.fatima.text'),
    })
  })

  // ENCERRAMENTO
  steps.push({
    type: 'prayer',
    titulo: t('rosary.prayers.agradecimento.title'),
    subtitulo: t('rosary.steps.thanks'),
    texto: t('rosary.prayers.agradecimento.text'),
  })
  steps.push({
    type: 'prayer',
    titulo: t('rosary.prayers.salveRainha.title'),
    subtitulo: t('rosary.steps.conclusion'),
    texto: t('rosary.prayers.salveRainha.text'),
  })
  steps.push({
    type: 'prayer',
    titulo: t('rosary.prayers.sinal.title'),
    subtitulo: t('rosary.steps.finalSign'),
    texto: t('rosary.prayers.sinal.text'),
  })
  steps.push({
    type: 'finish',
    titulo: t('rosary.steps.finish'),
    subtitulo: m.nome,
  })

  return steps
}

export function misterioDoDia(day: number, t: any, tm: any): Misterio | undefined {
  const MISTERIOS = getMisterios(t, tm)
  return MISTERIOS.find((m) => m.diasN.includes(day))
}
