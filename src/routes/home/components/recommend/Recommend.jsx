import React, { Component } from 'react';
import { connect } from 'dva';

import style from './style.less';

class Recommend extends Component {
    showRecommend = () => {
        let { recommendList } = this.props;
        return recommendList.map(item => {
            return (
                <div key={item.id}>
                    <img src={item.imgUrl} className={style.recommendImg} alt=""/>
                </div>
            )
        })
    }
    render() {
        let { showRecommend } = this;
        return (
            <div>
                {showRecommend()}
            </div>
        )
    }
}

const matStateToProps = (state, ownProps) => {
    return {
        recommendList: state.home.recommendList
    }
}

export default connect(matStateToProps)(Recommend)