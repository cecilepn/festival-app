<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
  }>(),
  {
    type: 'button',
    disabled: false,
  },
)
</script>

<template>
  <button class="button" :type="type" :disabled="disabled">
    <slot>Button</slot>
  </button>
</template>

<style scoped>
.button {
  min-width: 230px;
  min-height: 92px;
  padding: 1rem 2.5rem;
  border: 3px solid #061407;
  border-radius: 999px;
  background: #b9dcff;
  box-shadow: 13px 10px 0 #0b2005;
  color: #101010;
  cursor: pointer;
  font: inherit;
  font-size: 30px;
  font-weight: 600;
  line-height: 1;
  transition:
    transform 120ms ease,
    box-shadow 120ms ease,
    background-color 120ms ease;
}

.button:hover:not(:disabled) {
  background: #a9d3ff;
}

.button:active:not(:disabled) {
  transform: translate(6px, 5px);
  box-shadow: 7px 5px 0 #0b2005;
}

.button:focus-visible {
  outline: 3px solid #248ffb;
  outline-offset: 6px;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}
</style>
