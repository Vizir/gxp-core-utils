"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = exports.getInitials = exports.nextDayInMS = exports.nextDay = exports.SIX_MIN_IN_MS = exports.HOURS_IN_MS = exports.DAY_IN_MS = exports.STORAGE_KEYS = void 0;
var constants_1 = require("./constants");
Object.defineProperty(exports, "STORAGE_KEYS", { enumerable: true, get: function () { return constants_1.STORAGE_KEYS; } });
Object.defineProperty(exports, "DAY_IN_MS", { enumerable: true, get: function () { return constants_1.DAY_IN_MS; } });
Object.defineProperty(exports, "HOURS_IN_MS", { enumerable: true, get: function () { return constants_1.HOURS_IN_MS; } });
Object.defineProperty(exports, "SIX_MIN_IN_MS", { enumerable: true, get: function () { return constants_1.SIX_MIN_IN_MS; } });
var date_1 = require("./date");
Object.defineProperty(exports, "nextDay", { enumerable: true, get: function () { return date_1.nextDay; } });
Object.defineProperty(exports, "nextDayInMS", { enumerable: true, get: function () { return date_1.nextDayInMS; } });
var getInitials_1 = require("./getInitials");
Object.defineProperty(exports, "getInitials", { enumerable: true, get: function () { return getInitials_1.getInitials; } });
var storage_1 = require("./storage/storage");
Object.defineProperty(exports, "Storage", { enumerable: true, get: function () { return storage_1.Storage; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQWtGO0FBQXpFLHlHQUFBLFlBQVksT0FBQTtBQUFFLHNHQUFBLFNBQVMsT0FBQTtBQUFFLHdHQUFBLFdBQVcsT0FBQTtBQUFFLDBHQUFBLGFBQWEsT0FBQTtBQUM1RCwrQkFBNkM7QUFBcEMsK0ZBQUEsT0FBTyxPQUFBO0FBQUUsbUdBQUEsV0FBVyxPQUFBO0FBQzdCLDZDQUEyQztBQUFsQywwR0FBQSxXQUFXLE9BQUE7QUFDcEIsNkNBQTRDO0FBQW5DLGtHQUFBLE9BQU8sT0FBQSJ9