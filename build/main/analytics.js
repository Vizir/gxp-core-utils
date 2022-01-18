"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logEvent = exports.initializeFirebase = void 0;
const app_1 = __importDefault(require("firebase/app"));
require("firebase/analytics");
let firebaseAnalytics;
const initializeFirebase = (firebaseConfig) => {
    app_1.default.initializeApp(firebaseConfig);
    firebaseAnalytics = app_1.default.analytics();
};
exports.initializeFirebase = initializeFirebase;
const logEvent = (message) => {
    firebaseAnalytics.logEvent(message);
};
exports.logEvent = logEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FuYWx5dGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx1REFBK0I7QUFFL0IsOEJBQTRCO0FBWTVCLElBQUksaUJBQTBDLENBQUM7QUFFeEMsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLGNBQXFDLEVBQUUsRUFBRTtJQUMxRSxhQUFHLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xDLGlCQUFpQixHQUFHLGFBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFIVyxRQUFBLGtCQUFrQixzQkFHN0I7QUFFSyxNQUFNLFFBQVEsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQzFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFGVyxRQUFBLFFBQVEsWUFFbkIifQ==