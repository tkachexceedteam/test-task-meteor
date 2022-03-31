export const hideCompletedFilter = { isChecked: { $ne: true } };
export const userFilter = (userId) => (userId ? { userId } : {});
export const pendingOnlyFilter = (userId) => {
  return { ...hideCompletedFilter, ...userFilter(userId) };
};
export const getTasksFilter = (hideCompleted, userId) => {
  return hideCompleted ? pendingOnlyFilter(userId) : userFilter(userId);
};
