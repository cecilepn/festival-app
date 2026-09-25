<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  withDefaults(
    defineProps<{
      type?: 'button' | 'submit' | 'reset'
      disabled?: boolean
      to?: string
      variant?: 'primary' | 'filter' | 'filter-active' | 'secondary'
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
    <slot />
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
      box-shadow 120ms ease,
      background-color 120ms ease;
  }

  .button--primary {
    background: var(--color-blue-200);
  }

  .button--primary:hover:not(:disabled) {
    background-color: var(--color-blue-100);
    box-shadow: 0px 0px 0 #0b2005;
  }

  .button--secondary {
    background-color: var(--color-white);
    border: 2px solid var(--color-blue-500);
    color: var(--color-blue-500);
    box-shadow: 0px 0px 0 #0b2005;
  }

  .button--filter,
  .button--filter-active {
    padding: var(--spacing-8) var(--spacing-32);
    border: 1px solid var(--color-base-black);
    background: var(--color-base-white);
    box-shadow: none;
    white-space: nowrap;
  }

  .button--filter:hover:not(:disabled),
  .button--filter-active:hover:not(:disabled) {
    background: var(--color-base-white);
  }

  .button--filter-active {
    border: 2px solid var(--color-blue-300);
    color: var(--color-blue-500);
  }

  .button:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
</style>
