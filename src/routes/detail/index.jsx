import React, { Component } from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router'

import style from './style.less';

class Detail extends Component {
    render() {
        let { detailData } = this.props;
        return (
            <div className={style.detail}>
                <div className={style.title}>{detailData.title}</div>
                <div dangerouslySetInnerHTML={{__html: detailData.content}}></div>
            </div>
        )
    }
    componentDidMount() {
        let { match, getInitialDetail } = this.props;
        getInitialDetail(match.params.page);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        detailData: state.detail.detailData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getInitialDetail(page) {
            dispatch({
                type: 'detail/getInitialDetail',
                page
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));