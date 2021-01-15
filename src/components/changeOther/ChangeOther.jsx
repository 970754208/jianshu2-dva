import React, { Component } from 'react';

import style from './style.less';
import iconfont from '../../assets/fonts/iconfont.css'

export default class changeOther extends Component {
    spin = () => {
        let originAngle = parseInt(this.refresh.style.transform.match(/\d+/)&&this.refresh.style.transform.match(/\d+/)[0], 10);
        if(originAngle) {
            originAngle = originAngle + 360;
        } else {
            originAngle = 360;
        }
        this.refresh.style.transform = `rotate(${originAngle}deg)`;
    }
    render() {
        return (
            <div className={style.change} onClick={()=>this.spin()}>
                <span ref={el=>this.refresh=el} className={[iconfont.iconfont, iconfont.iconshuaxin, style.iconfont].join(' ')}></span>
                <span>换一批</span>
            </div>
        )
    }
}
