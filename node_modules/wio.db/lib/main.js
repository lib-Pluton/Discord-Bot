"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const fs_1 = require("fs");
const table_1 = require("./table");
const oku = () => JSON.parse(fs_1.readFileSync('./database.json', 'utf8'));
const yazdir = (data) => fs_1.writeFileSync('./database.json', JSON.stringify(data, null, 2));
const err = (e) => TypeError(e);
try {
    oku();
}
catch (_a) {
    yazdir({});
}
class db {
    static fetch(userData) {
        if (!userData)
            throw err('Çekilicek veri belirtilmedi.');
        const data = oku();
        return data[userData] ? data[userData] : null;
    }
    static set(userData, value) {
        if (!userData)
            throw err('Tanımlanmayan değer.');
        if (isNaN(value))
            if (!value)
                throw err('Tanımlanmayan değer.');
        const data = oku();
        data[userData] = value;
        yazdir(data);
    }
    static add(userData, value) {
        const data = oku();
        if (isNaN(value))
            if (!value)
                throw err('Ekliyeceğim şeyi belirtmelisin.');
        if (typeof value != 'number')
            throw err('Ekliyeceğim şey sayı türünden olmalıdır.');
        if (data[userData] == undefined)
            return this.set(userData, value);
        data[userData] += value;
        yazdir(data);
    }
    static delete(userData) {
        if (isNaN(userData)) {
            if (!userData)
                throw err('Neyi silmem gerektigini anlamadım.');
        }
        const data = oku();
        if (!data[userData])
            throw err('Böyle bir veri yok ki sileyim.');
        delete data[userData];
        yazdir(data);
    }
    static fetchAll() {
        let data = oku();
        return data;
    }
    static has(userData) {
        const data = oku();
        return data[userData] ? true : false;
    }
    static arrayDeleteVal(userData, value) {
        if (!userData || !value)
            throw err('Parametreleri girin.');
        const data = this.fetch(userData);
        if (Array.isArray(data) == false)
            throw err('Veri Array olmak zorundadır.');
        if (this.arrayHas(userData, value) == false)
            throw err("Array'de böyle veri yok silemiyorum.");
        var newArr = [];
        data.filter((a) => a != value)
            .forEach((a) => newArr.push(a));
        this.set(userData, newArr);
    }
    static arrayHas(userData, value) {
        if (!userData || !value)
            throw err('Parametreleri girin.');
        const data = this.fetch(userData);
        if (Array.isArray(data) == false)
            throw err('Veri Array olmak zorundadır.');
        return data.indexOf(value) > -1 ? true : false;
    }
    static clearDB() {
        yazdir({});
    }
    static deleteDataEach(userData) {
        if (!userData)
            throw err('Silmem gereken veriyi tanımlayın.');
        const allData = oku();
        let keys = Object.keys(allData);
        if (keys == '')
            throw err('Böyle bir veri yok silemem.');
        keys = keys.filter((a) => a.includes(userData));
        keys.forEach((a) => {
            this.delete(a);
        });
    }
    static includes(userData) {
        if (!userData)
            throw err('Çekmem gereken veriyi belirtin.');
        const allData = oku();
        let keys = Object.keys(allData);
        keys = keys.filter((a) => a.includes(userData));
        if (keys == '')
            throw err('Databasede böyle veri yok.');
        return keys;
    }
    static objectDeleteKey(userData, key) {
        if (!userData)
            throw err('Lütfen veriyi belirtin.');
        if (!key)
            throw err('Silinicek veriyi belirtin.');
        const f = this.has(userData);
        if (!f)
            throw err('Böyle bir veri yok.');
        const data = this.fetch(userData);
        if (typeof data != 'object' || Array.isArray(data))
            throw err('Belirtilen veri object tipinde bir veri değil.');
        if (!data[key])
            throw err('Belirtilen veride böyle bir key yok.');
        delete data[key];
        this.set(userData, data);
    }
    static push(userData, value) {
        const data = oku();
        if (Array.isArray(data[userData]) == false)
            throw err('Girilen değer Array olmak zorundadır.');
        data[userData].push(value);
        yazdir(data);
    }
    static startsWith(userData) {
        if (!userData)
            throw err('Bulunacak değer belirtilmedi..!');
        const data = oku();
        let arr = [];
        const res = [];
        let keys = Object.keys(data);
        keys.filter((a) => a.startsWith(userData))
            .forEach((a) => arr.push(a));
        arr.forEach((a) => {
            res.push(data[a]);
        });
        if (res.length == 0)
            return null;
        else
            return res;
    }
    static backup(file) {
        if (!file)
            throw err('Yedekliyecegim dosyanın ismini yaz.');
        if (!file.endsWith('.json'))
            throw err('Yedekliyecegim dosya json uzantılı olmalı.');
        const data = oku();
        fs_1.writeFileSync("./" + file, JSON.stringify(data, null, 4));
    }
    static filter(callback) {
        const arr = [];
        const all = this.fetchAll();
        for (var i in all) {
            if (callback(all[i]))
                arr.push(all[i]);
        }
        ;
        return arr;
    }
    static find(callback) {
        return this.filter(callback)[0];
    }
    ;
    static backupLoad(file) {
        if (!file)
            throw err('Yedekliyecegim dosyanın ismini yaz.');
        if (!file.endsWith('.json'))
            throw err('Yedekliyecegim dosya json uzantılı olmalı.');
        const data = oku();
        try {
            oku();
            fs_1.writeFileSync('./database.json', JSON.stringify(data, null, 2));
        }
        catch (_a) {
            fs_1.writeFileSync('./database.json', JSON.stringify(data, null, 2));
        }
    }
    static substr(userData, value) {
        if (!userData || !value)
            throw err("Parametreleri düzgün girin.");
        if (typeof value != "number")
            throw err("2. parametre sayı olmalıdır.");
        if (value < 1)
            throw err("Sayı 1'den küçük olamaz.");
        let data = this.fetch(userData);
        if (isNaN(data))
            throw err("Asıl değer bir sayı degil.");
        if (data < value)
            throw err("Eksilteceğim değer asıl değerden büyük olamaz.");
        data = data - value;
        this.set(userData, data);
    }
}
exports.db = db;
db.table = table_1.table;
