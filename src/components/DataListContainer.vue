<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :footer-props="{ itemsPerPageOptions }"
    >
      <template v-slot:default="props">
        <template v-for="(item, index) in props.items">
          <component
            :is="getChildComponent(item.child)"
            v-bind="item.props"
            :key="index">
          </component>
        </template>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import QuestionListItem from './QuestionListItem';

const dummyData = [
  {
    props: {
      title: 'Frozen Yogurt',
      category: 'Coding',
      tags: ['some', 'random', 'tag'],
    },
  },
  {
    props: {
      title: 'Frozen Yogurt',
      category: 'Coding',
      tags: ['some', 'random', 'tag'],
    },
  },
  {
    props: {
      title: 'Frozen Yogurt',
      category: 'Coding',
      tags: ['some', 'random', 'tag'],
      subCategory: 'Some categ',
    },
  },
  {

    props: {
      title: 'Frozen Yogurt',
      category: 'Coding',
      tags: ['some', 'random', 'tag'],
    },
  },
  {

    props: {
      title: 'Frozen Yogurt',
      category: 'Coding',
      tags: ['some', 'random', 'tag'],
      subCategory: 'Some categ',
    },
  },
  {

    props: {
      title: 'Frozen Yogurt',
      category: 'Coding',
      tags: ['some', 'random', 'tag'],
      subCategory: 'Some categ',
    },
  },
  {

    props: {
      title: 'Frozen Yogurt',
      category: 'Coding',
      tags: ['some', 'random', 'tag'],
    },
  },
  {

    props: {
      title: 'Frozen Yogurt',
      category: 'Coding',
      tags: ['some', 'random', 'tag'],
      subCategory: 'Some categ',
    },
  },
];

export default {
  name: 'DataListContainer',
  data: () => ({
    childComponent: QuestionListItem,
    itemsPerPageOptions: [4, 8, 12],
    itemsPerPage: 4,
    items: dummyData,
  }),
  methods: {
    getChildComponent(child) {
      return child || this.childComponent;
    },
  },
};
</script>

<style scoped>

</style>
