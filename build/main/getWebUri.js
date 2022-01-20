"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebUri = void 0;
const constants_1 = require("./constants");
const storage_1 = require("./storage/storage");
const getWebUri = () => {
    if (process.env.NODE_ENV === "production") {
        const country = storage_1.Storage.getData(constants_1.STORAGE_KEYS.COUNTRY).toUpperCase();
        return constants_1.countriesUri[country];
    }
    return process.env.MN_WEB_APP_URI;
};
exports.getWebUri = getWebUri;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0V2ViVXJpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dldFdlYlVyaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBeUQ7QUFDekQsK0NBQTRDO0FBR3JDLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtJQUM1QixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFlBQVksRUFBRTtRQUN6QyxNQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyx3QkFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BFLE9BQU8sd0JBQVksQ0FBQyxPQUFpQyxDQUFDLENBQUM7S0FDeEQ7SUFDRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO0FBQ3BDLENBQUMsQ0FBQztBQU5XLFFBQUEsU0FBUyxhQU1wQiJ9