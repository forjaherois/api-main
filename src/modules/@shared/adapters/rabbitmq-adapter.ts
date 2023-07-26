import { env } from '@src/infra/env-config';
import { Connection, connect } from 'amqplib';

import { IBrokerServiceProvider } from '../domain/broker-service-provider';

export class RabbitMQAdapter implements IBrokerServiceProvider {
    private connection: Connection | undefined;

    async connect(): Promise<void> {
        this.connection = await connect(env.SERVICE_BROKER_URL);
    }

    async publish(eventName: string, data: any): Promise<void> {
        const channel = await this.connection?.createChannel();
        await channel?.assertQueue(eventName, { durable: true });
        channel?.sendToQueue(eventName, Buffer.from(JSON.stringify(data)));
    }
}
