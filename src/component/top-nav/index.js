import React from 'react';
import ReactDOM from 'react-dom';
import '../layout/layout-style.css';
import {Link} from 'react-router-dom';

export default class TopNav extends React.Component{
    static handleClick(){
        var myClick = document.getElementById('testClick');
        if(ReactDOM.findDOMNode(myClick).style.display == 'block'){
            ReactDOM.findDOMNode(myClick).style.display = 'none';
        }else{
            ReactDOM.findDOMNode(myClick).style.display = 'block';
        }

    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-default top-navbar">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".sidebar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/"><b>Z</b>WB</Link>
                    </div>

                    <ul className="nav navbar-top-links navbar-right">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false" onClick={TopNav.handleClick.bind(this)}>
                                <i className="fa fa-user fa-fw"></i>
                                <span>欢迎，zwb!</span>
                                <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-user"  id="testClick">
                                <li><a href="#"><i className="fa fa-user fa-fw"></i> 用户中心</a>
                                </li>
                                <li><a href="#"><i className="fa fa-gear fa-fw"></i> 设置</a>
                                </li>
                                <li className="divider"></li>
                                <li><a href="#"><i className="fa fa-sign-out fa-fw"></i> 注销</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
