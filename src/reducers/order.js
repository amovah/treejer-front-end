import types from 'Root/actions';

export default (state = { count: 0, trees: [] }, action) => {
  switch (action.type) {
    case types.order.ADD: {
      const treeIndex = state.trees.findIndex(i => i.id === action.tree.id);
      const trees = [
        ...state.trees.slice(0, treeIndex),
        ...state.trees.slice(treeIndex + 1),
      ];

      if (treeIndex > -1) {
        trees.push({
          ...state.trees[treeIndex],
          qty: state.trees[treeIndex].qty + 1,
        });
      } else {
        trees.push({
          ...action.tree,
          qty: 1,
        });
      }

      return {
        count: state.count + 1,
        trees,
      };
    }

    case 'a': {
      return JSON.parse("{\"count\":4,\"trees\":[{\"type\":\"Quercus\",\"price\":100,\"region\":\"Planet\",\"drive\":\"B Site\",\"o2RatePerDay\":25,\"id\":\"treeNo2\",\"qty\":3},{\"type\":\"Populus\",\"price\":100,\"region\":\"Planet\",\"drive\":\"A Site\",\"o2RatePerDay\":15,\"id\":\"treeNo1\",\"qty\":1}]}");
    }

    default: {
      return state;
    }
  }
};
