const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave:false,
    devServer:
        {
            port: 8083,
            proxy:
                {
                    'api': {
                        target: "http://localhost:9090",
                        changeOrigin: true
                    },
                    'api2': {
                        target: "http://localhost:9091",
                        changeOrigin: true
                    }
                }
        }
})
