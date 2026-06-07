import { createI18n } from 'vue-i18n'
import pt from './locales/pt'
import es from './locales/es'
import en from './locales/en'

const savedLocale = localStorage.getItem('app-lang') || 'pt'

export const i18n = createI18n({
  legacy: false, // use Composition API
  locale: savedLocale,
  fallbackLocale: 'pt',
  messages: {
    pt,
    es,
    en
  }
})
