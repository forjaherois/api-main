export interface IBrokerServiceProvider {
    connect(): Promise<void>;
    publish(eventName: string, data: any): Promise<void>;
}
