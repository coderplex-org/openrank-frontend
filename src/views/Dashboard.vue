<template>
  <ThreeSectionContainer>
    <template v-slot:left>
      <DataFilter />
    </template>
    <template v-slot:middle>
      <DataListContainer v-bind="{childComponent: getChildComponent(), items: getDataItemsFromApi()}" />
    </template>
    <template v-slot:right>
      <DataDetails />
    </template>
  </ThreeSectionContainer>
</template>

<script>
import {
  DataListContainer,
  DataFilter,
  DataDetails,
  QuestionListItem,
} from '../components';
import ThreeSectionContainer from '../components/common';

export default {
  components: {
    ThreeSectionContainer,
    DataListContainer,
    DataDetails,
    DataFilter,
  },
  methods: {
    getDataItemsFromApi() {
      //TODO: Make API call and fetch data items from server
      //Modify this function to achieve the same.
      const dummyData = [
        {
          props: {
            title: 'Other than Yogurt',
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
      return dummyData;
    },
    getChildComponent() {
      return QuestionListItem;
    },
  },
};
</script>
