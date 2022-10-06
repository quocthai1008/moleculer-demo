declare const _default: {
    name: string;
    mixins: any[];
    settings: {
        port: string | number;
        ip: string;
        settings: {};
        use: any[];
        routes: {
            path: string;
            whitelist: string[];
            use: any[];
            mergeParams: boolean;
            authentication: boolean;
            authorization: boolean;
            autoAliases: boolean;
            aliases: {};
            callingOptions: {};
            bodyParsers: {
                json: {
                    strict: boolean;
                    limit: string;
                };
                urlencoded: {
                    extended: boolean;
                    limit: string;
                };
            };
            mappingPolicy: string;
            logging: boolean;
        }[];
        log4XXResponses: boolean;
        logRequestParams: any;
        logResponseData: any;
        assets: {
            folder: string;
            options: {};
        };
    };
    actions: {};
    started(): void;
};
export = _default;
