import { reactive } from 'vue';
export const storeKey = Symbol('Redux-Store');
export const createRedux = () => {
    const rootStore = reactive({});
    const plugin = {
        install: (app) => {
            app.provide(storeKey, rootStore);
        },
    };
    return plugin;
};
