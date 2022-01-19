"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebUri = void 0;
const constants_1 = require("./constants");
const storage_1 = require("./storage/storage");
const getWebUri = () => {
    if (!process.env.MN_WEB_APP_URI) {
        const country = storage_1.Storage.getData(constants_1.STORAGE_KEYS.COUNTRY).toUpperCase();
        return constants_1.countriesUri[country];
    }
    return process.env.MN_WEB_APP_URI;
};
exports.getWebUri = getWebUri;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0V2ViVXJpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dldFdlYlVyaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBeUQ7QUFDekQsK0NBQTRDO0FBR3JDLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtJQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUU7UUFDL0IsTUFBTSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLENBQUMsd0JBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRSxPQUFPLHdCQUFZLENBQUMsT0FBaUMsQ0FBQyxDQUFDO0tBQ3hEO0lBQ0QsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztBQUNwQyxDQUFDLENBQUM7QUFOVyxRQUFBLFNBQVMsYUFNcEIifQ==