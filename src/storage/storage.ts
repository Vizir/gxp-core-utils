import Cookies from "js-cookie";

import { STORAGE_KEYS } from "../../src/constants";

const DEFAULT_COUNTRY = process.env.GXP_DEFAULT_COUNTRY;
const DEFAULT_BRAND = process.env.GXP_DEFAULT_BRAND;
const DEFAULT_LANGUAGE = process.env.GXP_DEFAULT_LANGUAGE;

const defaults = {
  [STORAGE_KEYS.COUNTRY]: DEFAULT_COUNTRY,
  [STORAGE_KEYS.BRAND]: DEFAULT_BRAND,
  [STORAGE_KEYS.LANGUAGE]: DEFAULT_LANGUAGE,
};

const cookiesToKeep = [
  STORAGE_KEYS.COUNTRY,
  STORAGE_KEYS.BRAND,
  STORAGE_KEYS.LANGUAGE,
];

export class Storage {
  public static getData(key: string): string {
    const value = Cookies.get(key) || "";
    if (value === "" && defaults[key]) {
      return defaults[key] ?? "";
    }
    return value;
  }

  public static setData(key: string, value: unknown): void {
    const jsonValue = typeof value === "string" ? value : JSON.stringify(value);
    Cookies.set(key, jsonValue);
  }

  public static removeData(key: string): void {
    Cookies.remove(key);
  }

  public static removeAll(): void {
    Object.keys(Cookies.get()).forEach((key) => {
      if (!cookiesToKeep.includes(key)) {
        this.removeData(key);
      }
    });
  }
}
