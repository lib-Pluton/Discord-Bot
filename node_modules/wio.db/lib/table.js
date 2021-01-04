"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
const main_1 = require("./main");
class table {
    constructor() {
    }
    ;
    createTable(key) {
        main_1.db.set(key, []);
    }
    ;
    set(key, value) {
        main_1.db.push(key, value);
    }
    filter(key, callback) {
        const fetched = main_1.db.fetch(key);
        const arr = [];
        for (const x of fetched) {
            if (callback(x))
                arr.push(x);
        }
        return arr;
    }
    find(key, callback) {
        return this.filter(key, callback)[0];
    }
}
exports.table = table;
;
