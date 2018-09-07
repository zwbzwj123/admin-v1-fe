import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

import Layout from 'component/layout/index';
import Home from 'page/home/index';
import UIElements from './component/layout/ui-elements';

class App extends React.Component{
    render() {
        return (
            <div>
                <Router>
                    <Layout>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/ui_elements' component={UIElements} />
                            <Redirect from="*" to="/"/>
                        </Switch>
                    </Layout>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
//导致localhost/:1 Failed to load resource: the server responded with a status of 404 (Not Found)的原因可能是由于删除了resouse文件也有可能是由于添加的scss文件