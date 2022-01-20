import { countriesUri, STORAGE_KEYS } from "./constants";
import { Storage } from "./storage/storage";
import { CountriesUriType } from "./types";

export const getWebUri = () => {
  if (process.env.NODE_ENV === "production") {
    const country = Storage.getData(STORAGE_KEYS.COUNTRY).toUpperCase();
    return countriesUri[country as keyof CountriesUriType];
  }
  return process.env.MN_WEB_APP_URI;
};
