import types from 'Root/actions';

export default (state = { count: 0, trees: [] }, action) => {
  switch (action.type) {
    case types.order.ADD: {
      const treeIndex = state.trees.findIndex(i => i.name === action.tree.name);
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

    default: {
      return state;
    }
  }
};
