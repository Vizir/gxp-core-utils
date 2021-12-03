import Cookies, { CookieChangeListener } from "universal-cookie";
export declare class Storage {
    static cookies: Cookies;
    static initialize(cookies?: Cookies): void;
    static getData(key: string): string;
    static setData(key: string, value: unknown): void;
    static removeData(key: string): void;
    static removeAll(): void;
    static addListener(callback: CookieChangeListener): void;
}
