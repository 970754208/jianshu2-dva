import axios from 'axios';

export default {
    namespace: 'detail',
    state: {
        detailData: {}
    },
    reducers: {
        getDetail(state, action) {
            return {
                ...state,
                detailData: action.detailData
            }
        }
    },
    effects: {
        *getInitialDetail({ page }, {put, call}) {
            const res = yield call(axios.get, '/api/detail.php?page=' + page);
            yield put({
                type: 'getDetail',
                detailData: res.data.data
            })
        }
    }
}