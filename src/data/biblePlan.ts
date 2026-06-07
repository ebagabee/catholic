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

import { PLAN_PT } from '../locales/biblePlan.pt'
import { PLAN_ES } from '../locales/biblePlan.es'
import { PLAN_EN } from '../locales/biblePlan.en'

export function getPlan(locale: string): Mes[] {
  if (locale === 'es') return PLAN_ES
  if (locale === 'en') return PLAN_EN
  return PLAN_PT
}

export function allLivros(m: Mes): Livro[] {
  return m.grupos.flatMap((g) => g.livros)
}

export function getTotalCaps(plan: Mes[]): number {
  return plan.reduce((s, m) => s + m.caps_total, 0)
}
