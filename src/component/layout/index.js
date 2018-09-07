import React from 'react';

import TopNav from 'component/top-nav/index';
import 'antd/dist/antd.css';
import SideNav from 'component/side-nav/index';
export default class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="wrapper">
                <TopNav/>
                <SideNav/>
                {this.props.children}
            </div>
        );
    }
}
