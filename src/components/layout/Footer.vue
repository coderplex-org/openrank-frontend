<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="{icon, link} in icons"
          :key="icon"
          class="mx-4 white--text"
          :href="link"
          icon
          target="_blank"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>OpenRank</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
    icons: [
      {
        icon: 'mdi-youtube',
        link: 'https://www.youtube.com/channel/UCTkguToherUvVNnzMFINk-w',
      },
      {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/coderplex',
      },
      {
        icon: 'mdi-github-face',
        link: 'https://github.com/coderplex',
      },
      {
        icon: 'mdi-discord',
        link: 'https://discord.gg/qEA8vxd',
      },
      {
        icon: 'mdi-twitter',
        link: 'https://www.twitter.com/coderplex/',
      },
      {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/coderplex/',
      },
    ],

  }),
};
</script>

<style scoped>

</style>
