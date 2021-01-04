import { table } from "./table";
declare class db {
    static table: typeof table;
    static fetch(userData: string): any;
    static set(userData: string, value: any): void;
    static add(userData: string, value: number): void;
    static delete(userData: any): void;
    static fetchAll(): object;
    static has(userData: string): true | false;
    static arrayDeleteVal(userData: string, value: any): void;
    static arrayHas(userData: string, value: any): boolean;
    static clearDB(): void;
    static deleteDataEach(userData: string): void;
    static includes(userData: string): Array<any>;
    static objectDeleteKey(userData: string, key: any): void;
    static push(userData: string, value: any): void;
    static startsWith(userData: string): Array<any> | null;
    static backup(file: string): void;
    static filter(callback: any): any;
    static find(callback: any): any;
    static backupLoad(file: string): void;
    static substr(userData: string, value: number): void;
}
export { db };
