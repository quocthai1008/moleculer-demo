declare const _default: {
    namespace: string;
    nodeID: any;
    metadata: {};
    logger: {
        type: string;
        options: {
            colors: boolean;
            moduleColors: boolean;
            formatter: string;
            objectPrinter: any;
            autoPadding: boolean;
        };
    };
    logLevel: string;
    transporter: any;
    cacher: string;
    serializer: string;
    requestTimeout: number;
    retryPolicy: {
        enabled: boolean;
        retries: number;
        delay: number;
        maxDelay: number;
        factor: number;
        check: (err: any) => boolean;
    };
    maxCallLevel: number;
    heartbeatInterval: number;
    heartbeatTimeout: number;
    contextParamsCloning: boolean;
    tracking: {
        enabled: boolean;
        shutdownTimeout: number;
    };
    disableBalancer: boolean;
    registry: {
        strategy: string;
        preferLocal: boolean;
    };
    circuitBreaker: {
        enabled: boolean;
        threshold: number;
        minRequestCount: number;
        windowTime: number;
        halfOpenTime: number;
        check: (err: any) => boolean;
    };
    bulkhead: {
        enabled: boolean;
        concurrency: number;
        maxQueueSize: number;
    };
    validator: boolean;
    errorHandler: any;
    metrics: {
        enabled: boolean;
        reporter: {
            type: string;
            options: {
                port: number;
                path: string;
                defaultLabels: (registry: any) => {
                    namespace: any;
                    nodeID: any;
                };
            };
        };
    };
    tracing: {
        enabled: boolean;
        exporter: {
            type: string;
            options: {
                logger: any;
                colors: boolean;
                width: number;
                gaugeWidth: number;
            };
        };
    };
    middlewares: any[];
    replCommands: any;
    created(broker: any): void;
    started(broker: any): Promise<void>;
    stopped(broker: any): Promise<void>;
};
export = _default;
