"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
const constants_1 = require("../../src/constants");
const DEFAULT_COUNTRY = process.env.GXP_DEFAULT_COUNTRY;
const DEFAULT_BRAND = process.env.GXP_DEFAULT_BRAND;
const DEFAULT_LANGUAGE = process.env.GXP_DEFAULT_LANGUAGE;
const defaults = {
    [constants_1.STORAGE_KEYS.COUNTRY]: DEFAULT_COUNTRY,
    [constants_1.STORAGE_KEYS.BRAND]: DEFAULT_BRAND,
    [constants_1.STORAGE_KEYS.LANGUAGE]: DEFAULT_LANGUAGE,
};
const cookiesToKeep = [
    constants_1.STORAGE_KEYS.COUNTRY,
    constants_1.STORAGE_KEYS.BRAND,
    constants_1.STORAGE_KEYS.LANGUAGE,
];
class Storage {
    static getData(key) {
        var _a;
        const value = js_cookie_1.default.get(key) || "";
        if (value === "" && defaults[key]) {
            return (_a = defaults[key]) !== null && _a !== void 0 ? _a : "";
        }
        return value;
    }
    static setData(key, value) {
        const jsonValue = typeof value === "string" ? value : JSON.stringify(value);
        js_cookie_1.default.set(key, jsonValue);
    }
    static removeData(key) {
        js_cookie_1.default.remove(key);
    }
    static removeAll() {
        Object.keys(js_cookie_1.default.get()).forEach((key) => {
            if (!cookiesToKeep.includes(key)) {
                this.removeData(key);
            }
        });
    }
}
exports.Storage = Storage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdG9yYWdlL3N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMERBQWdDO0FBRWhDLG1EQUFtRDtBQUVuRCxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBQ3hELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7QUFDcEQsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0FBRTFELE1BQU0sUUFBUSxHQUFHO0lBQ2YsQ0FBQyx3QkFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLGVBQWU7SUFDdkMsQ0FBQyx3QkFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLGFBQWE7SUFDbkMsQ0FBQyx3QkFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGdCQUFnQjtDQUMxQyxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUc7SUFDcEIsd0JBQVksQ0FBQyxPQUFPO0lBQ3BCLHdCQUFZLENBQUMsS0FBSztJQUNsQix3QkFBWSxDQUFDLFFBQVE7Q0FDdEIsQ0FBQztBQUVGLE1BQWEsT0FBTztJQUNYLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBVzs7UUFDL0IsTUFBTSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakMsT0FBTyxNQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsbUNBQUksRUFBRSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBYztRQUMvQyxNQUFNLFNBQVMsR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RSxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBVztRQUNsQyxtQkFBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVM7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXpCRCwwQkF5QkMifQ==