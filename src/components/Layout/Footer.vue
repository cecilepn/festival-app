<script setup lang="ts">
  const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <section>
      <h2>Accéder au festival</h2>
      <address>46 rue de Mareil<br />78100 Saint-Germain-en-Laye</address>
    </section>

    <nav aria-label="Liens utiles">
      <RouterLink to="/mentions-legales">Mentions légales</RouterLink>
    </nav>

    <p>© {{ currentYear }} Eclosion Festival</p>
  </footer>
</template>
