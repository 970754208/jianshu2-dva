import dva from 'dva';
import createLoading from 'dva-loading';

import './index.css';
import './assets/fonts/iconfont.css';


// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/example').default);
require('./models').default.forEach(obj => {
    app.model(obj.default)
})

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

// console.log(app)
