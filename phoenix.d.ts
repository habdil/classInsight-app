declare module "phoenix" {
  export class Socket {
    constructor(endPoint: string, opts?: any);
    connect(): void;
    disconnect(callback?: () => void, code?: number, reason?: string): void;
    channel(topic: string, params?: object): Channel;
  }

  export class Channel {
    join(timeout?: number): Push;
    leave(timeout?: number): Push;
    push(event: string, payload: object, timeout?: number): Push;
    on(event: string, callback: (response?: any) => void): void;
  }

  export class Push {
    receive(status: string, callback: (response?: any) => void): Push;
  }

  // Add more types as needed for your specific use case
}
