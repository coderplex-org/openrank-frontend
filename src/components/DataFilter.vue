<template>
  <v-card
    :loading="false"
    class="mx-auto my-12"
  >
    <v-card-title>
      <slot name="title"></slot>
    </v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style scoped>

</style>
