const context = require.context('./', false, /\.js$/);

export default context.keys().filter(key => {
    return key !== './index.js'
}).map(key =>{
    return context(key)
})