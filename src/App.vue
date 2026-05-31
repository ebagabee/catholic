<template>
  <div class="p-8">
    <TabComponent :tabs="tabs" default-tab="terco">
      <template #terco>
        <p>Conteúdo da aba Rezar o Santo Terço</p>
      </template>
      <template #leitura>
        <p>Conteúdo da aba Rotina de Leitura Diária</p>
      </template>
    </TabComponent>
  </div>
</template>

<script setup lang="ts">
import TabComponent, { type Tab } from '@/components/TabComponent.vue'

const tabs: Tab[] = [
  { id: 'terco', label: 'Rezar o Santo Terço' },
  { id: 'leitura', label: 'Rotina de Leitura Diária' },
]
</script>
