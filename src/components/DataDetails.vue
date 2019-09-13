<template>
  <v-card
    :loading="false"
    class="mx-auto my-0"
  >
    <v-card-title>
      <slot name="title">
      This is Detailed View
      </slot>
    </v-card-title>
    <v-card-text>
      <slot>
      Here we can show some more information about the selected data item from the middle container.
      </slot>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <slot name="actions">
      Here we can have some actions related to the item.
      </slot>
    </v-card-actions>
  </v-card>
</template>

<script>
import { Card } from './'

export default {
  name: 'DataDetails',
  components: {
    Card,
  },
};
</script>

<style scoped>

</style>
