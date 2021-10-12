export default function categoriesReducer(state, action) {
  switch (action.type) {
    case "CREATE_CATEGORY":
      return createCategory(state, action);
    case "READ_ALL_CATEGORIES":
      return readAllCategories(state, action);
    case "UPDATE_CATEGORY":
      return updateCategory(state, action);
    case "DELETE_CATEGORIES":
      return deleteCategory(state, action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function createCategory(state, action) {
  const { payload } = action;

  if (payload !== null) return [...state, payload];
  return state;
}

function readAllCategories(state, action) {
  const { payload } = action;

  if (payload !== null) return payload;
  return state;
}

function updateCategory(state, action) {
  // pending
  return state;
}

function deleteCategory(state, action) {
  // pending
  return state;
}