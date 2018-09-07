import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../layout/layout-style.css';

export default class TopNav extends React.Component {
    constructor(props) {
        super(props);
    }

    static handleSpread(value){
        var myNavLevel = document.getElementsByClassName(value)[0];
        if(ReactDOM.findDOMNode(myNavLevel).style.display === 'block'){
            ReactDOM.findDOMNode(myNavLevel).style.display = 'none'
        }else{
            ReactDOM.findDOMNode(myNavLevel).style.display = 'block';
        }
    }

    render() {
        return (
            <div className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">

                        <li>
                            <Link className="active-menu waves-effect waves-dark" to="/">
                                <i className="fa fa-dashboard"></i> Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/ui_elements" className="waves-effect waves-dark">
                                <i className="fa fa-desktop"></i> UI Elements</Link>
                        </li>
                        <li>
                            <a href="chart.html" className="waves-effect waves-dark">
                                <i className="fa fa-bar-chart-o"></i> Charts</a>
                        </li>
                        <li>
                            <a href="tab-panel.html" className="waves-effect waves-dark">
                                <i className="fa fa-qrcode"></i> Tabs &amp; Panels</a>
                        </li>

                        <li>
                            <a href="table.html" className="waves-effect waves-dark">
                                <i className="fa fa-table"></i> Responsive Tables</a>
                        </li>
                        <li>
                            <a href="form.html" className="waves-effect waves-dark"><i className="fa fa-edit"></i> Forms
                            </a>
                        </li>


                        <li>
                            <a href="#" className="waves-effect waves-dark" onClick={TopNav.handleSpread.bind(this, 'nav-second-level')}>
                                <i className="fa fa-sitemap"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse">
                                <li>
                                    <a href="#">Second Level Link</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Link</a>
                                </li>
                                <li>
                                    <a href="#" onClick={TopNav.handleSpread.bind(this, 'nav-third-level')}>Second Level Link<span className="fa arrow"></span></a>
                                    <ul className="nav nav-third-level collapse">
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>

                                    </ul>

                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="empty.html" className="waves-effect waves-dark">
                                <i className="fa fa-fw fa-file"></i> Empty Page</a>
                        </li>
                    </ul>

                </div>

            </div>
        );
    }
}