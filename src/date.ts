import { DAY_IN_MS } from "./constants";

export const nextDay = (date: Date): Date =>
  new Date(date.getTime() + DAY_IN_MS);

export const nextDayInMS = (date: Date): number => nextDay(date).getTime();
