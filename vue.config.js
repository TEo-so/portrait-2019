module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/game/portrait2019/'
        : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://hongyan.cqupt.edu.cn/234/cq_impress/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    }

}