<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { addSubscriber } from '@/lib/handlers'

  type Status = 'idle' | 'loading' | 'invalid' | 'subscribed' | 'already_subscribed' | 'error'

  const email = ref('')
  const status = ref<Status>('idle')

  const messages: Partial<Record<Status, string>> = {
    invalid: 'Saisissez une adresse mail valide, par exemple nom@exemple.fr.',
    subscribed: 'Merci ! Votre inscription à la newsletter est confirmée.',
    already_subscribed: 'Cette adresse est déjà inscrite à la newsletter.',
    error: "L'inscription n'a pas pu aboutir. Réessayez dans quelques instants."
  }

  const message = computed(() => messages[status.value] ?? '')
  const isError = computed(() => status.value === 'invalid' || status.value === 'error')

  async function subscribe() {
    const value = email.value.trim().toLowerCase()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      status.value = 'invalid'
      return
    }

    status.value = 'loading'
    try {
      status.value = await addSubscriber(value)
      if (status.value === 'subscribed') email.value = ''
    } catch {
      status.value = 'error'
    }
  }
</script>

<template>
  <section
    aria-labelledby="newsletter-title"
    class="grid items-center gap-32 px-16 py-64 md:grid-cols-[2fr_3fr] lg:px-80">
    <h2 id="newsletter-title" class="text-blue-500">Newsletter</h2>

    <form novalidate class="flex flex-col gap-8" @submit.prevent="subscribe">
      <label for="newsletter-email" class="text-body-s">Votre adresse mail</label>
      <div class="flex flex-col gap-16 sm:flex-row">
        <input
          id="newsletter-email"
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="Votre adresse mail"
          :aria-invalid="isError"
          aria-describedby="newsletter-help newsletter-status"
          class="min-w-0 flex-1 rounded-full border-2 border-blue-300 bg-white px-16 py-12 text-body-m placeholder:text-grey" />
        <button type="submit" class="button-outline" :disabled="status === 'loading'">
          {{ status === 'loading' ? 'Inscription…' : "S'inscrire" }}
        </button>
      </div>
      <p id="newsletter-help" class="text-label text-grey">
        En vous inscrivant, vous acceptez notre politique de confidentialité.
      </p>
      <p
        id="newsletter-status"
        role="status"
        class="text-body-s"
        :class="isError ? 'text-error' : 'text-success'">
        {{ message }}
      </p>
    </form>
  </section>
</template>
