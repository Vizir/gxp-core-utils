"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextDayInMS = exports.nextDay = void 0;
const constants_1 = require("./constants");
const nextDay = (date) => new Date(date.getTime() + constants_1.DAY_IN_MS);
exports.nextDay = nextDay;
const nextDayInMS = (date) => (0, exports.nextDay)(date).getTime();
exports.nextDayInMS = nextDayInMS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3QztBQUVqQyxNQUFNLE9BQU8sR0FBRyxDQUFDLElBQVUsRUFBUSxFQUFFLENBQzFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxxQkFBUyxDQUFDLENBQUM7QUFEMUIsUUFBQSxPQUFPLFdBQ21CO0FBRWhDLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBVSxFQUFVLEVBQUUsQ0FBQyxJQUFBLGVBQU8sRUFBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUE5RCxRQUFBLFdBQVcsZUFBbUQifQ==