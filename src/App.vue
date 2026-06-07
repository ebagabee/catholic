<template>
  <header class="main-nav-header">
    <div class="nav-wrapper">
      <div class="nav-logo">
        <span class="nav-logo-cross">✝</span>
        <span class="nav-logo-text">Catholic</span>
      </div>

      <nav class="top-nav">
        <router-link to="/" class="nav-link" exact-active-class="active">
          <span class="nav-link-icon">🌹</span>
          <span class="nav-link-text">
            <span class="nav-text-full">{{ $t('nav.rosary') }}</span>
            <span class="nav-text-short">{{ $t('nav.rosary') }}</span>
            <span class="nav-text-tiny">Terço</span>
          </span>
        </router-link>
        <router-link to="/biblia-1-ano" class="nav-link" active-class="active">
          <span class="nav-link-icon">📖</span>
          <span class="nav-link-text">
            <span class="nav-text-full">{{ $t('nav.biblePlan') }}</span>
            <span class="nav-text-short">{{ $t('nav.biblePlan') }}</span>
            <span class="nav-text-tiny">Plano</span>
          </span>
        </router-link>
        <router-link to="/livros" class="nav-link" active-class="active">
          <span class="nav-link-icon">📜</span>
          <span class="nav-link-text">
            <span class="nav-text-full">{{ $t('nav.bibleBooks') }}</span>
            <span class="nav-text-short">{{ $t('nav.bibleBooks') }}</span>
            <span class="nav-text-tiny">Livros</span>
          </span>
        </router-link>
      </nav>

      <div class="nav-actions">
        <!-- Language Switcher -->
        <div class="lang-switcher" @click.stop="toggleLangMenu">
          <button class="nav-theme-toggle" :title="$t('header.language')">
            ⚙️
          </button>
          <div class="lang-dropdown" v-if="showLangMenu">
            <button class="lang-option" @click="setLang('pt')" :class="{ active: currentLang === 'pt' }">{{ $t('lang.pt') }}</button>
            <button class="lang-option" @click="setLang('es')" :class="{ active: currentLang === 'es' }">{{ $t('lang.es') }}</button>
            <button class="lang-option" @click="setLang('en')" :class="{ active: currentLang === 'en' }">{{ $t('lang.en') }}</button>
          </div>
        </div>

        <button
          class="nav-theme-toggle"
          :title="isDark ? 'Modo claro' : 'Modo noturno'"
          @click="toggleTheme"
        >
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </div>
    </div>
  </header>

  <main class="wrap">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const isDark = ref(true)
const showLangMenu = ref(false)
const currentLang = ref(locale.value)

function applyTheme(dark: boolean) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
}

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme(isDark.value)
}

function toggleLangMenu() {
  showLangMenu.value = !showLangMenu.value
}

function setLang(lang: string) {
  locale.value = lang
  currentLang.value = lang
  localStorage.setItem('app-lang', lang)
  showLangMenu.value = false
}

function closeMenu() {
  if (showLangMenu.value) {
    showLangMenu.value = false
  }
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved ? saved === 'dark' : true
  applyTheme(isDark.value)
  
  const savedLang = localStorage.getItem('app-lang')
  if (savedLang) {
    locale.value = savedLang
    currentLang.value = savedLang
  }

  document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})
</script>
