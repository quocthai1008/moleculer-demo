declare const _default: {
    name: string;
    actions: {
        create: {
            rest: {
                method: string;
                path: string;
            };
            params: {
                name: string;
                age: string;
                address: string;
            };
            handler(context: any): Promise<string>;
        };
        findAll: {
            rest: {
                method: string;
                path: string;
            };
            handler(context: any): Promise<any>;
        };
        created(): void;
    };
};
export = _default;
