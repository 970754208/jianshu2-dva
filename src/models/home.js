import axios from 'axios';

export default {
    namespace: 'home',
    state: {
        topicList: [],
        articleList: [],
        recommendList: [],
        authorList: [],
        page: 1,
        loading: false,
        topShow: false
    },
    reducers: {
        getState(state, action) {
            return {
                ...state,
                topicList: action.payload.topicList,
                articleList: action.payload.articleList,
                recommendList: action.payload.recommendList,
                authorList: action.payload.authorList
            }
        },
        loadMoreArt(state, action) {
            return {
                ...state,
                articleList: state.articleList.concat(action.articleList),
                page: action.nextPage
            }
        },
        changeTopShow(state, action) {
            return {
                ...state,
                topShow: action.payload
            }
        }
    },
    effects: {
        *getInitialState(action, {put, call}) {
            const res = yield call(axios.get, '/api/home.php?page=1');
            yield put({
                type: 'getState',
                payload: res.data.data
            })
        },
        *loadMore(action, {put, call}) {
            const res = yield call(axios.get, `api/articleList.php?page=${action.nextPage}`);
            yield put({
                type: 'loadMoreArt',
                articleList: res.data.data,
                nextPage: action.nextPage
            })
        }
    }
}