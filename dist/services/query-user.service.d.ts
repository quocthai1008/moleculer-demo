declare const _default: {
    name: string;
    actions: {
        findAll: {
            rest: {
                method: string;
                path: string;
            };
            handler(): Promise<any>;
        };
        findOne: {
            rest: {
                method: string;
                path: string;
            };
            params: {
                _id: string;
            };
            handler(context: any): Promise<any>;
        };
        created(): void;
    };
};
export = _default;
