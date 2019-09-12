export default (store) => {
  store.subscribeAction({
    before: (action) => {
      console.log(`before action ${action.type}`);
      store.commit('setLoading', true, { root: true });
    },
    after: (action) => {
      console.log(`after action ${action.type}`);
      store.commit('setLoading', false, { root: true });
    },
  });
};
