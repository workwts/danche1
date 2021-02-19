import React, { Component } from 'react';
import { HashRouter as Router,Route,Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Buttons from './components/pages/ui/button';
import Modals from './components/pages/ui/modals';
import Loadings from './components/pages/ui/loadings';
import Notices from './components/pages/ui/notice';
import Messages from './components/pages/ui/messages';
import Tabs from './components/pages/ui/tabs';
import NoMatch from './components/pages/nomatch'

export default class IRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <App>
                        <Route path="/admin" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Buttons}/>
                                    <Route path="/admin/ui/modals" component={Modals}/>
                                    <Route path="/admin/ui/loadings" component={Loadings}/>
                                    <Route path="/admin/ui/notification" component={Notices}/>
                                    <Route path="/admin/ui/messages" component={Messages}/>
                                    <Route path="/admin/ui/tabs" component={Tabs}/>
                                    <Route component={NoMatch}/>
                                </Switch>
                            </Admin>
                        }/>
                    </App>
                </Router>
            </div>
        )
    }
}
