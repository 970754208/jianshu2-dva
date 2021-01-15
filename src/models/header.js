import axios from 'axios';

export default {
    namespace: 'header',
    state: {
        focused: false,
        mouseIn: false,
        mouseState: false,
        headerList: [],
        page: 0,
        totalPage: 1
    },
    reducers: {
        changeSearchFocus(state, action) {
            console.log(action)
            return {
                ...state,
                focused: action.focusState
            }
        },
        headerList(state, action) {
            let headerList = action.payload.data.data;
            let totalPage = Math.ceil(headerList.length / 10);
            return {
                ...state,
                headerList,
                totalPage
            }
        },
        changeHotPage(state, action) {
            let page = action.nextPage;
            page = page === state.totalPage? 0: page;
            console.log('state', state)
            return {
                ...state,
                page
            }
        },
        changeMouseState(state, action) {
            return {
                ...state,
                mouseState: action.payload
            }
        }
    },
    effects: {
        *getHeaderList(action, {put, call}) {
            const headerList = yield call(axios.get, '/api/headerList.php');
            yield put({type: 'headerList', payload: headerList})
        }
    }
}