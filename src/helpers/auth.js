
export const checkAuth = () => !!localStorage.getItem('token');

export const removeAuth = () => {
  localStorage.clear();
};
