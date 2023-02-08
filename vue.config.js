const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        entry: './src/main.js',
        devServer: {
            hot: true,
        },
        watch: true,
        watchOptions: {
            ignored: /node_modules/,
            poll: 1000,
        },
        plugins: [
            {
                apply: (compiler) => {
                    compiler.hooks.done.tap('DonePlugin', () => {
                        console.log('Compile is done !');
                        setTimeout(() => {
                            if (process.env.NODE_ENV === 'production') {
                                process.exit(0);
                            }
                        });
                    });
                },
            },
        ],
    },
});
