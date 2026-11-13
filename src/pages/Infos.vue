<script setup lang="ts">
  import { useInfos } from '@/composables/useInfos'
  const { infos, loading, error } = useInfos()
</script>

<template>
  <div class="flex flex-col gap-48 px-16 pt-64 lg:px-48">
    <h1>Infos pratiques</h1>

    <p v-if="loading">Chargement…</p>
    <p v-else-if="error">Error loading infos: {{ error }}</p>
    <p v-else-if="!infos.length">Aucune information pour le moment.</p>

    <ul v-else class="grid gap-24 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="info in infos"
        :key="info.id"
        class="flex min-h-240 flex-col gap-16 rounded-br-[48px] bg-gradient-to-b from-blue-200 to-pink-200 p-32">
        <h2 class="text-h3 normal-case">{{ info.title }}</h2>
        <p v-if="info.content" class="whitespace-pre-line">
          {{ info.content }}
        </p>
      </li>
    </ul>
  </div>
</template>
