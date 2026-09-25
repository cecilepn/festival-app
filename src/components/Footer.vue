<script setup lang="ts">
  import { PrismicImage, PrismicLink } from '@prismicio/vue'
  import { onMounted, ref } from 'vue'

  import { prismic } from '../lib/prismicClient'

  const currentYear = new Date().getFullYear()
  const menu = ref<Awaited<ReturnType<typeof prismic.getSingle>> | null>(null)
  const menuError = ref<string | null>(null)

  onMounted(async () => {
    try {
      menu.value = await prismic.getSingle('footer')
    } catch (fetchError) {
      menuError.value =
        fetchError instanceof Error
          ? fetchError.message
          : 'Impossible de charger les liens du pied de page.'
    }
  })
</script>

<template>
  <footer class="footer flex flex-col">
    <section
      class="partners flex flex-col items-center gap-32"
      aria-labelledby="partners-title">
      <h2 class="color-primary">Partenaires</h2>
      <div
        v-if="menu?.data.partners?.length"
        class="partner-logos flex justify-around items-center w-full"
        aria-label="Nos partenaires">
        <PrismicLink
          v-for="(partner, index) in menu.data.partners"
          :key="index"
          :field="partner.link_partner"
          class="partner-logo"
          :aria-label="
            partner.partner_logo?.alt || `Partenaire ${Number(index) + 1}`
          ">
          <PrismicImage :field="partner.partner_logo" />
        </PrismicLink>
      </div>
      <p v-else-if="menuError" class="content-error" role="status">
        Les partenaires seront bientôt affichés.
      </p>
    </section>

    <section class="footer-main flex w-full justify-around">
      <div class="address-block w-half flex flex-col gap-32">
        <p class="body-l-semi-bold color-primary">Accéder au festival</p>
        <address>46 rue de Mareil<br />78100 Saint-Germain-en-Laye</address>
      </div>

      <div class="footer-menu flex flex-col w-half gap-32">
        <nav class="flex flex-col gap-8" aria-label="Liens utiles">
          <PrismicLink
            v-for="(link, index) in menu?.data.menu_footer"
            :key="link.key ?? index"
            :field="link"
            class="footer-link">
            {{ link.text }}
          </PrismicLink>
        </nav>
        <nav
          v-if="menu?.data.social_menu?.length"
          class="flex"
          aria-label="Réseaux sociaux">
          <PrismicLink
            v-for="(social, index) in menu.data.social_menu"
            :key="index"
            :field="social.link_social"
            :aria-label="social.social_logo?.alt">
            <PrismicImage :field="social.social_logo" />
          </PrismicLink>
        </nav>
      </div>
    </section>

    <div class="footer-bottom body-s flex justify-between w-full">
      <p>
        ©{{ currentYear }} ECLOSION <span>|</span> Gestion préférences des
        cookies <span>|</span> Mentions Légales
      </p>
      <p>Copyright © Cécile PHAN NGUYEN</p>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    gap: 90px;
  }
  .partner-logos,
  .address-block {
    padding: 0 var(--spacing-32);
  }

  .footer-menu {
    border-left: solid 1px var(--color-black);
    padding-left: var(--spacing-32);
  }

  .footer-bottom {
    border-top: solid 1px var(--color-black);
    padding: var(--spacing-16) var(--spacing-32);
  }
</style>
