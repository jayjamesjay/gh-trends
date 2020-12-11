const saved = (state = [], action) => {
  switch (action.type) {
    case 'SAVED_ADD_REMOVE':
      return state.some((item) => item.nameWithOwner === action.saved.nameWithOwner)
        ? [...state.filter((item) => item.nameWithOwner !== action.saved.nameWithOwner)]
        : [...state, action.saved];
    case 'ALL_SAVED_REMOVED':
      return [];
    default:
      return state;
  }
};

export default saved;
