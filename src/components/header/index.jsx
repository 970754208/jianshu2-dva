import React, { Component } from 'react';
import style from './style.less'

export default class Header extends Component {
    state = {
        focused: false
    }
    focusHandler() {
        this.setState({focused: true})
    }
    blurHandler() {
        this.setState({focused: false})
    }
    render() {
        return (
            <div className={style.container}>
                <div className={style.headerWrapper}>
                    <div className={style.logo}></div>
                    <button className={style.write_btn}>写文章</button>
                    <button className={style.sign_up}>注册</button>
                    <div className={style.log_in}>登录</div>
                    <div className={style.Aa_btn}>Aa</div>
                    <div className={style.box_flex}>
                        <div className={style.head}>
                            <div className={[style.nav, style.find].join(' ')}>发现</div>
                            <div className={style.nav}>关注</div>
                            <div className={style.nav}>消息</div>
                        </div>
                        <div className={[style.searchWrapper, this.state.focused?style.focused:''].join(' ')}>
                            <input 
                                type="text" 
                                className={style.search} 
                                placeholder="搜索"
                                onFocus={()=>this.focusHandler()}
                                onBlur={()=>this.blurHandler()}
                            />
                            {/* <span className={[style.iconfont, style.iconmagnifier].join(' ')}>&#xe60f;</span> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

}
