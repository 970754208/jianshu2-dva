import React, { Component } from 'react';
import { connect } from 'dva';

import style from './style.less';

class Topic extends Component {
    showTopic = () => {
        let { topicList } = this.props;
        return topicList.map(topic => {
            return (
                <div className={style.topicItem} key={topic.id}>
                    <img className={style.topicImg} src={topic.imgUrl} alt=""/>
                    {topic.title}
                </div>
            )
        })
    }
    render() {
        let { showTopic } = this;
        return (
            <div className={style.topic}>
                { showTopic() }
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        topicList: state.home.topicList
    }
}

export default connect(mapStateToProps)(Topic);