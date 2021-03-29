module.exports = {
    // 所有 webpack-dev-server 的选项都支持。
    // nodejs express的小型web服务器
    // devServer的before在服务内部的所有其他中间件之前， 
    //提供执行自定义中间件的功能。 这可以用来配置自定义处理程序。
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000', // 目标接口的域名
                // secure: true,  // https 的时候 使用该参数
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    '^/api': '' // 重写路径, 去掉接口地址中的api字符串
                }
            }
        }

    }
}