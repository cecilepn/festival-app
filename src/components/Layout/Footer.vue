<script setup lang="ts">
  const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="mt-96 border-t-2 border-black">
    <div class="grid md:grid-cols-2">
      <section
        class="flex flex-col gap-48 border-b-2 border-black px-16 py-48 md:border-b-0 md:border-r-2 lg:px-40">
        <h2 class="text-body-l font-semibold normal-case text-blue-500">Accéder au festival</h2>
        <address class="not-italic">46 rue de Mareil<br />78100 Saint-Germain-en-Laye</address>
      </section>

      <nav aria-label="Liens utiles" class="px-16 py-48 lg:px-40">
        <ul class="flex flex-col gap-16">
          <li>
            <RouterLink to="/mentions-legales" class="hover:underline">Mentions légales</RouterLink>
          </li>
        </ul>
      </nav>
    </div>

    <div
      class="flex flex-col justify-between gap-8 border-t-2 border-black px-16 py-24 text-label sm:flex-row lg:px-40">
      <p class="font-semibold">© {{ currentYear }} ECLOSION</p>
      <p>Copyright © Cécile PHAN NGUYEN</p>
    </div>
  </footer>
</template>
