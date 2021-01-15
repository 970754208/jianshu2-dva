import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import style from './style.less';

class List extends Component {
    showArticle = () => {
        let { articleList } = this.props;
        return articleList.map(article => {
            return (
                <div className={style.article} key={article.id}>
                    <Link to={`/detail/${article.id}`} className={style.nav}>
                        <img className={style.articleImg} src={article.imgUrl} alt=""/>
                        <div>
                            <h3 className={style.title}>{article.title}</h3>
                            <p className={style.desc}>{article.desc}</p>
                        </div>
                    </Link>
                </div>
            )
        })
    }
    render() {
        let { showArticle } = this;
        let { loadMore, page, loading } = this.props;
        return (
            <div>
                { showArticle() }
                <div className={[style.more,loading? style.loading: ''].join(' ')} onClick={()=>loadMore(loading, (page + 1))}>
                    {loading? '加载中...': '更多文字'}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        articleList: state.home.articleList,
        page: state.home.page,
        loading: state.loading.global
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadMore(loading, nextPage) {
            if(loading) return;
            dispatch({type: 'home/loadMore', nextPage})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);