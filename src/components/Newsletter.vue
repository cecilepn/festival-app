<script setup lang="ts">
  import Button from './Button.vue'
  import InputText from './InputText.vue'
</script>

<template>
  <section
    class="newsletter flex justify-between items-center"
    aria-labelledby="newsletter-title">
    <h2 class="color-primary">Newsletter</h2>
    <form class="form w-half flex items-center gap-24">
      <InputText
        class="w-full"
        type="text"
        id="email"
        name="email"
        label="Votre adresse mail"
        placeholder="Votre adresse mail"
        required />
      <Button
        type="submit"
        variant="secondary"
        class="form__button body-s-semi-bold"
        >S'inscrire</Button
      >
    </form>
  </section>
</template>

<style scoped>
  .newsletter {
    padding: var(--spacing-80) var(--spacing-32);
  }
  .form {
    button {
      margin-top: var(--spacing-24);
    }
  }
</style>
