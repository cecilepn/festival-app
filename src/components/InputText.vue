<script setup lang="ts">
  import { useId } from 'vue'

  const props = withDefaults(
    defineProps<{
      id?: string
      label: string
      type?: 'text' | 'email' | 'search' | 'tel' | 'url'
      name?: string
      placeholder?: string
      autocomplete?: string
      required?: boolean
      disabled?: boolean
      error?: string
    }>(),
    {
      type: 'text',
      required: false,
      disabled: false,
    },
  )

  const model = defineModel<string>({ default: '' })
  const inputId = props.id ?? useId()
  const errorId = `${inputId}-error`
</script>

<template>
  <div class="input-text">
    <label class="input-text__label" :for="inputId">{{ label }}</label>
    <input
      :id="inputId"
      v-model="model"
      class="input-text__control"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      :disabled="disabled"
      :aria-invalid="Boolean(error)"
      :aria-describedby="error ? errorId : undefined"
    />
    <p v-if="error" :id="errorId" class="input-text__error" role="alert">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
  .input-text {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
  }

  .input-text__label {
    color: var(--color-black);
    font-size: var(--font-size-medium);
    font-weight: 600;
  }

  .input-text__control {
    width: 100%;
    min-height: 48px;
    padding: var(--spacing-8) var(--spacing-16);
    border: 2px solid var(--color-black);
    border-radius: 999px;
    background: var(--color-white);
    color: var(--color-black);
    font: inherit;
  }

  .input-text__control::placeholder {
    color: var(--color-neutral);
    opacity: 1;
  }

  .input-text__control:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 3px;
  }

  .input-text__control:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .input-text__error {
    margin: 0;
    color: var(--color-error);
    font-size: var(--font-size-small);
  }
</style>
