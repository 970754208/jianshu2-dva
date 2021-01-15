import React, { Component } from 'react';
import { connect } from 'dva';

import style from './style.less';

import Topic from './components/topic/Topic';
import List from './components/list/List';
import RecommendList from './components/recommend/Recommend';
import AuthorList from './components/author/Author';

class Home extends Component {
    /**
     * 回到顶部逻辑
     */
    backTop = () => {
        let num = 50;
        function back() {
            let _top = window.pageYOffset;
            if(_top <= 0) return;
            document.documentElement.scrollTop = _top - num;
            num *= 1.25;
            setTimeout(back, 10);
        }
        back();
    }
    /**
     * 是否显示回到顶部按钮
     */
    topShow = () => {
        let { topShow, changeTopShow } = this.props;
        let _top = window.scrollY;
        if(_top > 100 && !topShow) {
            changeTopShow(true)
        }
        if(_top <= 100 && topShow) {
            changeTopShow(false)
        }
    }
    render() {
        let { backTop } = this;
        let { topShow } = this.props;
        return (
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.bannerImg}>
                        <img src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    </div>
                    <Topic />
                    <List />
                </div>
                <div className={style.right}>
                    <RecommendList />
                    <AuthorList />
                </div>
                {topShow? <div className={style.backTop} onClick={()=>backTop()}></div>: null}
            </div>
        )
    }
    componentDidMount() {
        this.props.getState();
        window.addEventListener('scroll', this.topShow)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        topShow: state.home.topShow
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getState() {
            dispatch({type: 'home/getInitialState'})
        },
        changeTopShow(value) {
            dispatch({type: 'home/changeTopShow', payload: value})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);