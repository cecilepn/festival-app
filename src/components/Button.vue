<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  withDefaults(
    defineProps<{
      type?: 'button' | 'submit' | 'reset'
      disabled?: boolean
      to?: string
      variant?: 'primary'
    }>(),
    {
      type: 'button',
      disabled: false,
      variant: 'primary'
    }
  )
</script>

<template>
  <RouterLink v-if="to" :to="to" class="button" :class="`button--${variant}`">
    <slot>Button</slot>
  </RouterLink>
  <button
    v-else
    class="button"
    :class="`button--${variant}`"
    :type="type"
    :disabled="disabled">
    <slot>Button</slot>
  </button>
</template>

<style scoped>
  .button {
    padding: 1rem 2.5rem;
    border: 2px solid #061407;
    border-radius: 999px;
    background: var(--color-blue-200);
    box-shadow: 6px 6px 0 #0b2005;
    color: #101010;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition:
      transform 120ms ease,
      box-shadow 120ms ease,
      background-color 120ms ease;
  }

  .button:hover:not(:disabled) {
    background: #a9d3ff;
  }

  .button--primary {
    background: var(--color-blue-200);
  }

  .button--primary:hover:not(:disabled) {
    background: var(--color-blue-400);
  }

  .button:active:not(:disabled) {
    transform: translate(6px, 5px);
    box-shadow: 7px 5px 0 #0b2005;
  }

  .button:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
</style>
