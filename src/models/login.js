import axios from 'axios';

export default {
    namespace: 'login',
    state: {
        loginState: false
    },
    reducers: {
        loginIn(state, action) {
            return {
                ...state,
                loginState: true
            }
        },
        loginOut(state, action) {
            return {
                ...state,
                loginState: false
            }
        }
    },
    effects: {
        *login({ account, password }, { put, call }) {
            let res = yield call(axios.get, `/api/login.php?account=${account}&password=${password}`);
            if(res.data.success) {
                yield put({type: 'loginIn'})
            } else {
                alert('用户名或密码输入错误，请重试！')
            }
        }
    }
}