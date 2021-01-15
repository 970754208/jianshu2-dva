import React, { Component } from 'react';
import { connect } from 'dva';

import style from './style.less';

import ChangeOther from '../../../../components/changeOther/ChangeOther';

class Author extends Component {
    showAuthor = () => {
        let { authorList } = this.props;
        return authorList.map(item => {
            let { likes_count, word_count } = item;
            likes_count = likes_count >= 1000? (likes_count/1000).toFixed(1) + 'k': likes_count;
            word_count = word_count >= 1000? (word_count/1000).toFixed(1) + 'k': word_count;
            return (
                <div className={style.authorItem} key={item.id}>
                    <img className={style.authorImg} src={item.imgUrl} alt=""/>
                    <div className={style.right}>
                        <div className={style.authorName}>
                            {item.nickname}
                        </div>
                        <div className={style.authorDesc}>
                            {`写了 ${word_count} 字 · ${likes_count}喜欢`}
                        </div>
                    </div>
                    <div className={style.care}>+关注</div>
                </div>
            )
        })
    }
    render() {
        let { showAuthor } = this;
        return (
            <div className={style.authorArea}>
                <div className={style.authorTop}>
                    <span className={style.title}>推荐作者</span>
                    <ChangeOther />
                </div>
                {showAuthor()}
                <div className={style.serMore}>查看更多&gt;</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        authorList: state.home.authorList
    }
}

export default connect(mapStateToProps)(Author);