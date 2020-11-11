export const getUrlPart = ({ pathname }) => {
  const index = pathname.lastIndexOf("/");
  return pathname.substring(index + 1);
};
