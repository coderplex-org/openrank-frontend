<template>
  <v-card
      class="mx-auto"
      :flat="isFlat"
      :outlined="isOutlined"
      :width="width"
      :height="height"
    >
      <v-card-title>{{title}}</v-card-title>
      <v-card-text>Category: {{category}}</v-card-text>
      <span class="ml-4">
        <v-icon left>mdi-label</v-icon>
        <v-chip
          v-for="(tag, index) in tags"
          :key="index"
          class="ma-2"
          label
        >
          {{tag}}
        </v-chip>
      </span>
      <br/>
      <v-chip class="ml-4 mb-2" v-if="subCategory">{{subCategory}}</v-chip>
  </v-card>
</template>

<script>
export default {
  name: 'QuestionListItem',
  props: {
    title: String,
    category: String,
    tags: Array,
    subCategory: String,
    isFlat: {
      type: Boolean,
      default: true,
    },
    isOutlined: {
      type: Boolean,
      default: true,
    },
    width: {
      value: [Number, String],
      default: '100%',
    },
    height: {
      value: [Number, String],
      default: 'auto',
    },
  },
};
</script>

<style scoped>

</style>
