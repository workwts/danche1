import React, { Component } from 'react';
import { HashRouter as Router,Route,Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Button from './components/pages/ui/button';
import NoMatch from './components/pages/nomatch'

export default class IRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <App>
                        <Route path="/admin" render={()=>
                            <Admin>
                                <Route path="/admin/ui/buttons" component={Button}/>
                                <Route component={NoMatch}/>
                            </Admin>
                        }/>
                    </App>
                </Router>
            </div>
        )
    }
}
