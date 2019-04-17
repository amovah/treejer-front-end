import types from 'Root/actions';

export default (state = { count: 0, trees: [], owner: 'personalForest' }, action) => {
  switch (action.type) {
    case types.order.ADD: {
      const index = state.trees.findIndex(i => i.id === action.tree.id);
      const trees = [
        ...state.trees.slice(0, index),
        ...state.trees.slice(index + 1),
      ];

      if (index > -1) {
        trees.push({
          ...state.trees[index],
          qty: state.trees[index].qty + 1,
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

    case types.order.REMOVE: {
      const index = state.trees.findIndex(i => i.id === action.id);
      const count = state.count - state.trees[index].qty;

      return {
        count,
        trees: [
          ...state.trees.slice(0, index),
          ...state.trees.slice(index + 1),
        ],
      };
    }

    case types.order.CHANGE_QTY: {
      const index = state.trees.findIndex(i => i.id === action.id);
      const count = state.count + (action.qty - state.trees[index].count);

      return {
        count,
        trees: [
          ...state.trees.slice(0, index),
          {
            ...state.trees[index],
            qty: action.qty,
          },
          ...state.trees.slice(index + 1),
        ],
      };
    }

    case types.order.SET_OWNER: {
      return {
        ...state,
        owner: action.owner,
      };
    }

    case types.order.SET_METHOD: {
      return {
        ...state,
        method: action.method,
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
