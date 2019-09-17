import HTTP from '../../../http';
import filterSection from './filterSection';
import store from '../..';

import {
  QuestionListItem,
} from '../../../components';

export default {
  namespaced: true,
  strict: true,
  state: {
    entity: null,
    childComponent: QuestionListItem,
    items: [],
    itemsPerPage: 5,
    showFilter: false,
    filters: {},
    search: '',
    sections: '',
    successMsg: '',
    errorMsg: null,
  },
  getters: {
    getItemsPerPage({ itemsPerPage }) {
      return itemsPerPage;
    },
    getSearch({ search }) {
      return search;
    }
  },
  mutations: {
    setEntity(state, entity) {
      state.entity = entity;
    },
    setItems(state, items) {
      state.items = items;
    },
    setItemsPerPage(state, itemsPerPage) {
      state.itemsPerPage = itemsPerPage;
    },
    setSearch(state, search) {
      state.search = search;
    },
    setShowFilter(state, showFilter) {
      state.showFilter = showFilter;
    },
    setSections(state, sections) {
      state.sections = sections;
    },
    setFilters(state, { key, val }) {
      state.filters[key] = val;
    },
    setSuccessMsg(state, message) {
      state.successMsg = message;
    },
    setErrorMsg(state, message) {
      state.errorMsg = message;
    },
  },
  actions: {
    async fetchFilteredData({
      commit,
      rootGetters,
      state: {
        entity,
        search,
        filters,
      },
    }) {
      if (entity === null) {
        return [];
      }

      await HTTP().get(`/${entity}`, {
        search,
        filters,
      }).then((items) => {
        commit('setItems', items);
        setTimeout(() => commit('setSuccessMsg', null), 2000);
      }).catch(({ response }) => {
        commit('setErrorMsg', rootGetters.getErrorMessage(response));
        setTimeout(() => commit('setErrorMsg', null), 2000);
      });
    },
    async fetchDummyData({
      commit,
    }) {
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
            title: 'Other than Yogurt',
            category: 'Coding',
            tags: ['some', 'random', 'tag'],
          },
        },
        {
          props: {
            title: 'Other than Yogurt',
            category: 'Coding',
            tags: ['some', 'random', 'tag'],
          },
        },
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
      commit('setItems', dummyData);
    },
    async fetchSectionsData({ commit }) {
      const dummySections = [
        {
          name: 'Section 1',
          items: [['Management', 'management'],
            ['Settings', 'settings']],
          enableSearch: true,
        },
        {
          name: 'Section 2',
          items: [['Management', 'management'],
            ['Settings', 'settings']],
          enableSearch: true,
        },
        {
          name: 'Section 3',
          items: [['Management', 'management'],
            ['Settings', 'settings']],
        },
      ];
      commit('setSections', dummySections);
      const { state: scopedState, getters, mutations } = filterSection;
      dummySections.forEach(({ name }) => {
        store.registerModule(`filterSection-${name}`, {
          state: scopedState,
          getters,
          mutations,
          namespaced: true,
        });
      });
    },
  },
};
