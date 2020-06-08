export const save = saved => ({
  type: 'SAVED_ADD_REMOVE',
  saved
});

export const removeAllSaved = saved => ({
  type: 'ALL_SAVED_REMOVED',
  saved
});
