export const getInitials = (name: string) =>
  name
    .split(" ")
    .reduce((acc, cur) => acc + cur[0], "")
    .slice(0, 2)
    .toUpperCase();
