export declare class table {
    constructor();
    createTable(key: string): void;
    set(key: any, value: any): void;
    filter(key: any, callback: any): any[];
    find(key: any, callback: any): any;
}
