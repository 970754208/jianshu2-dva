module.exports = {
    proxy: {
        '/api/articleList.php': {
            target: 'http://www.bjlink32.com/lf/jianshu/api/articleList.php',
            changeOrigin: true,
            pathRewrite: {
                '/api/articleList.php': ''
            }
        },
        '/api/detail.php': {
            target: 'http://www.bjlink32.com/lf/jianshu/api/detail.php',
            changeOrigin: true,
            pathRewrite: {
                '/api/detail.php': ''
            }
        },
        '/api/headerList.php': {
            target: 'http://www.bjlink32.com/lf/jianshu/api/headerList.php',
            changeOrigin: true,
            pathRewrite: {
                '/api/headerList.php': ''
            }
        },
        '/api/home.php': {
            target: 'http://www.bjlink32.com/lf/jianshu/api/home.php',
            changeOrigin: true,
            pathRewrite: {
                '/api/home.php': ''
            }
        },
        '/api/login.php': {
            target: 'http://www.bjlink32.com/lf/jianshu/api/login.php',
            changeOrigin: true,
            pathRewrite: {
                '/api/login.php': ''
            }
        },
    }
}