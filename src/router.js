import React, { Component } from 'react';
import { HashRouter as Router,Route,Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Common from './common';
import Buttons from './components/pages/ui/button';
import Modals from './components/pages/ui/modals';
import Loadings from './components/pages/ui/loadings';
import Notices from './components/pages/ui/notice';
import Messages from './components/pages/ui/messages';
import Tabs from './components/pages/ui/tabs';
import Gallery from './components/pages/ui/gallery';
import Carousel from './components/pages/ui/carousel';
import FormLogin from './components/pages/form/login';
import FormRegister from './components/pages/form/register';
import BasicTable from './components/pages/table/basicTable';
import HighTable from './components/pages/table/highTable';
import City from './components/pages/city';
import Order from './components/pages/order';
import OrderDetail from './components/pages/order/detail';
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
                                    <Route path="/admin/ui/gallery" component={Gallery}/>
                                    <Route path="/admin/ui/carousel" component={Carousel}/>
                                    <Route path="/admin/form/login" component={FormLogin}/>
                                    <Route path="/admin/form/reg" component={FormRegister}/>
                                    <Route path="/admin/table/basic" component={BasicTable}/>
                                    <Route path="/admin/table/high" component={HighTable}/>
                                    <Route path="/admin/city" component={City}/>
                                    <Route path="/admin/order" component={Order}/>
                                    <Route component={NoMatch}/>
                                </Switch>
                            </Admin>
                        }/>
                        <Route path="/common" render={()=>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
                            </Common>
                        }/>
                    </App>
                </Router>
            </div>
        )
    }
}
