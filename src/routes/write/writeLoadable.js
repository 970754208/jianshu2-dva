import React, { Component } from 'react';
import Loadable from 'react-loadable';

import Loading from '../Loading';

const LoadableComponent = Loadable({
    loader: () => import('./index.jsx'),
    loading: Loading
})

export default class writeLoadable extends Component {
    render() {
        return <LoadableComponent />
    }
}