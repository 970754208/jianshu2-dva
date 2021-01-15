import React, { Component } from 'react';
import { Redirect, withRouter } from 'dva/router';
import { connect } from 'dva';

class Write extends Component {
    render() {
        let { loginState } = this.props;
        return (
            loginState
            ? <div>
                写文章页面
            </div>
            : <Redirect to="/login" />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loginState: state.login.loginState
    }
}

export default connect(mapStateToProps)(withRouter(Write));