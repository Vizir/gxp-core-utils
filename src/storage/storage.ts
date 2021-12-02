import Cookies, { CookieChangeListener } from "universal-cookie";

import { STORAGE_KEYS } from "../constants";

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

// const cookies = new Cookies();
export class Storage {
  static cookies: Cookies;

  public static initialize(cookies: Cookies = new Cookies()): void {
    this.cookies = cookies;
  }

  public static getData(key: string): string {
    const value = this.cookies.get(key) || "";
    if (value === "" && defaults[key]) {
      return defaults[key] ?? "";
    }
    return value;
  }

  public static setData(key: string, value: unknown): void {
    const jsonValue = typeof value === "string" ? value : JSON.stringify(value);
    this.cookies.set(key, jsonValue);
  }

  public static removeData(key: string): void {
    this.cookies.remove(key);
  }

  public static removeAll(): void {
    Object.keys(this.cookies.getAll()).forEach((key) => {
      if (!cookiesToKeep.includes(key)) {
        this.removeData(key);
      }
    });
  }

  public static addListener(callback: CookieChangeListener): void {
    this.cookies.addChangeListener(callback);
  }
}
