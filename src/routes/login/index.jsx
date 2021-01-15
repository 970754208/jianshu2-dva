import React, { Component } from 'react';
import { connect } from 'dva';
import { Redirect, withRouter } from 'dva/router';

import style from './style.less';

class Login extends Component {
    render() {
        let { login, loginState } = this.props;
        return (
            loginState
            ? <Redirect to="/" />
            : <div className={style.loginWrapper}>
                <form className={style.login}>
                    <input 
                        type="text" 
                        placeholder="账号" 
                        className={style.userName}
                        ref={inp=>this.account=inp}
                    />
                    <input 
                        type="password" 
                        placeholder="密码" 
                        className={style.pwd}
                        ref={inp=>this.password=inp}
                        autoComplete='12'
                    />
                    <input 
                        type="button" 
                        defaultValue="登录" 
                        className={style.loginBtn}
                        onClick={()=>login(this.account.value, this.password.value)}
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loginState: state.login.loginState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login(account, password) {
            dispatch({
                type: 'login/login',
                account,
                password
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));