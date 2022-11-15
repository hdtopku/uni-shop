export const extractUrl = (s) => {
  if (s == null) {
    return '';
  }
  const reg = /(http[s]{0,1}|ftp):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
  const r = s.match(reg);
  return r != null ? r[0] : s;
};
