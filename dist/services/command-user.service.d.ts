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
        update: {
            rest: {
                method: string;
                path: string;
            };
            params: {
                _id: string;
                name: string;
                age: string;
                address: string;
            };
            handler(context: any): Promise<string>;
        };
        delete: {
            rest: {
                method: string;
                path: string;
            };
            params: {
                _id: string;
            };
            handler(context: any): Promise<string>;
        };
        created(): void;
    };
};
export = _default;
