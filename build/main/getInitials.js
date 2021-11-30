"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitials = void 0;
const getInitials = (name) => name
    .split(" ")
    .reduce((acc, cur) => acc + cur[0], "")
    .slice(0, 2)
    .toUpperCase();
exports.getInitials = getInitials;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0SW5pdGlhbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2V0SW5pdGlhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUMxQyxJQUFJO0tBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQztLQUNWLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0tBQ3RDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ1gsV0FBVyxFQUFFLENBQUM7QUFMTixRQUFBLFdBQVcsZUFLTCJ9