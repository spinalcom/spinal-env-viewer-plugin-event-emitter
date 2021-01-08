export declare class SpinalEventEmitter {
    private _events;
    constructor();
    on(eventName: string, listener: Function): void;
    emit(eventName: string, data: any): void;
}
