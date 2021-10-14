export default function productReducer(state, action) {
  switch (action.type) {
    case "CREATE_DISH":
      return createDish(state, action);
    case "READ_DISHES":
      return readDishes(state, action);
    case "UPDATE_DISH":
      return updateDish(state, action);
    case "DELETE_DISHES":
      return deleteDish(state, action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function createDish(state, action) {
  const { payload } = action;

  if (payload !== null) return [...state, payload];
  return state;
}

function readDishes(state, action) {
  const { payload } = action;

  if (payload !== null) return payload;
  return state;
}

function updateDish(state, action) {
  // pending
  return state;
}

function deleteDish(state, action) {
  // pending
  return state;
}
