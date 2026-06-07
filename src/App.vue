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
          <span class="nav-link-text">Santo Terço</span>
        </router-link>
        <router-link to="/biblia-1-ano" class="nav-link" active-class="active">
          <span class="nav-link-icon">📖</span>
          <span class="nav-link-text">Bíblia em 1 Ano</span>
        </router-link>
        <router-link to="/livros" class="nav-link" active-class="active">
          <span class="nav-link-icon">📜</span>
          <span class="nav-link-text">Livros da Bíblia</span>
        </router-link>
      </nav>

      <button
        class="nav-theme-toggle"
        :title="isDark ? 'Modo claro' : 'Modo noturno'"
        @click="toggleTheme"
      >
        {{ isDark ? '☀️' : '🌙' }}
      </button>
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
import { ref, onMounted } from 'vue'

const isDark = ref(true)

function applyTheme(dark: boolean) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
}

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme(isDark.value)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved ? saved === 'dark' : true
  applyTheme(isDark.value)
})
</script>

