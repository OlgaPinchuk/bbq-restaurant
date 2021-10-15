export default function productReducer(state, action) {
  switch (action.type) {
    case "CREATE_PRODUCT":
      return createProduct(state, action);
    case "READ_PRODUCT":
      return readProduct(state, action);
    case "UPDATE_PRODUCT":
      return updateProduct(state, action);
    case "DELETE_PRODUCT":
      return deleteProduct(state, action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function createProduct(state, action) {
  const { payload } = action;

  if (payload !== null) return [...state, payload];
  return state;
}

function readProduct(state, action) {
  const { payload } = action;

  if (payload !== null) return payload;
  return state;
}

function updateProduct(state, action) {
  const { payload } = action;
  const { id, data } = payload;
  const product = state.find((item) => item.id === id);

  if (product === undefined) throw new Error("category not found");
  return state;
}

function deleteProduct(state, action) {
  const { payload } = action;
  if (payload !== null) {
    return [...state, state.filter((item) => item.id !== payload)];
  }
  return state;
}
