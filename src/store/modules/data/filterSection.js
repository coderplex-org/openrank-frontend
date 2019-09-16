const state = () => (
  {
    model: [],
    search: '',
  }
);

const getters = {
  getSearch: state => state.search,
  getModel: state => state.model,
};

const mutations = {
  setSearch: (state, search) => {
    state.search = search;
  },
  setModel: (state, model) => {
    state.model = model;
  },
};

export default {
  state,
  getters,
  mutations,
};
