<template>
  <div>
    <div class="flex border-b border-gray-200">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="[
          'px-4 py-2 text-sm font-medium transition-colors',
          activeTab === tab.id
            ? 'border-b-2 border-blue-500 text-blue-600'
            : 'text-gray-500 hover:text-gray-700',
        ]"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="mt-4">
      <slot :name="activeTab" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface Tab {
  id: string
  label: string
}

const props = defineProps<{
  tabs: Tab[]
  defaultTab?: string
}>()

const activeTab = ref(props.defaultTab ?? props.tabs[0]?.id)
</script>
