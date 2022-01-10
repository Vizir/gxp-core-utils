"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseAnalytics = void 0;
const app_1 = __importDefault(require("firebase/app"));
require("firebase/analytics");
class FirebaseAnalytics {
    static initializeAnalytics(firebaseConfig) {
        app_1.default.initializeApp(firebaseConfig);
        this.firebaseAnalytics = app_1.default.analytics();
    }
    static logEvent(message) {
        this.firebaseAnalytics.logEvent(message);
    }
}
exports.FirebaseAnalytics = FirebaseAnalytics;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FuYWx5dGljcy9hbmFseXRpY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsdURBQStCO0FBQy9CLDhCQUE0QjtBQUk1QixNQUFhLGlCQUFpQjtJQUdyQixNQUFNLENBQUMsbUJBQW1CLENBQUMsY0FBcUM7UUFDckUsYUFBRyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQWU7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFYRCw4Q0FXQyJ9