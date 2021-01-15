import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';


import style from './style.less';

import ChangeOther from '../changeOther/ChangeOther'

class Header extends Component {
    /**
     * 热门搜索组件
     */
    hotSearch = () => {
        let { focused, headerList, page, changeHotPage, changeMouseState, mouseState } = this.props;
        if(focused || mouseState) {
            let _headerList = [];
            for(let i = page * 10; i < page * 10 + 10; i++) {
                if(headerList[i]) {
                    _headerList.push(<li key={headerList[i]} className={style.hotSearchItem}>{headerList[i]}</li>)
                }
            }
            if(!headerList.length) return;
            return (
                <div 
                    className={style.hotSearch} 
                    onMouseEnter={()=>changeMouseState(true)} 
                    onMouseLeave={()=>changeMouseState(false)}
                >
                    <div className={style.hotSearchTitle}>
                        <div className={style.changeOther} onClick={()=>changeHotPage((page + 1), this)} >
                            <ChangeOther/>
                        </div>
                            热门搜索
                    </div>
                    <ul className={style.hotSearchTrea}>
                        {_headerList}
                    </ul>
                </div>
            )
        }
    }
    /**
     * 显示热门搜索，并初始化内容
     */
    showSearch = () => {
        let { headerList, changeSearchFocus, getHeaderList } = this.props;
        
        if(headerList.length === 0) {
            getHeaderList();
        }
        changeSearchFocus(true)
    }
    render() {
        let { focused, changeSearchFocus, loginState, loginOut } = this.props;
        let { showSearch } = this;
        return (
            <div className={style.container}>
                <div className={style.headerWrapper}>
                    <Link replace to="/" className={style.logo}></Link>
                    <Link to="/write">
                        <button className={style.write_btn}>写文章</button>
                    </Link>
                    <button className={style.sign_up}>注册</button>
                    {
                        loginState
                        ? <div className={style.log_in} onClick={()=>loginOut()}>退出</div>
                        : <Link to="/login" className={style.log_in}>登录</Link>
                    }
                    <div className={style.Aa_btn}>Aa</div>
                    <div className={style.box_flex}>
                        <div className={style.head}>
                            <div className={[style.nav, style.find].join(' ')}>发现</div>
                            <div className={style.nav}>关注</div>
                            <div className={style.nav}>消息</div>
                        </div>
                        <div className={[style.searchWrapper, focused? style.focused: ''].join(' ')}>
                            <input 
                                type="text" 
                                className={style.search} 
                                placeholder="搜索"
                                onFocus={()=>showSearch()}
                                onBlur={()=>changeSearchFocus(false)}
                            />
                            { this.hotSearch() }
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        focused: state.header.focused,
        headerList: state.header.headerList,
        page: state.header.page,
        mouseState: state.header.mouseState,
        loginState: state.login.loginState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSearchFocus(focusState) {
            dispatch({type: 'header/changeSearchFocus', focusState});
        },
        getHeaderList() {
            dispatch({type: 'header/getHeaderList'})
        },
        changeHotPage(nextPage, _this) {
            console.log(1)
            dispatch({type: 'header/changeHotPage', nextPage});
        },
        changeMouseState(value) {
            dispatch({type: 'header/changeMouseState', payload: value})
        },
        loginOut() {
            dispatch({type: 'login/loginOut'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)