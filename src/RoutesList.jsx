import React from 'react'
import {Route, Switch, withRouter, Link} from 'react-router-dom';

import Home from './pages/Home.jsx';
import Publish from './pages/Publish.jsx';
import Mixin from './pages/Mixin.jsx';

export class RoutesList extends React.Component {

    constructor(props) {

        // this.props.mixClient is supplied via App.jsx
        super(props);


    }

    render() {

        return (

            <div className="route-container">

                <Switch>

                    <Route exact path="/" render={() => <Home/>}/>
                    <Route exact path="/publish" component={Publish}/>
                    <Route exact path="/mixins" component={Mixin}/>
                    <Route render={() => <div className="alert alert-info">Sorry this page was not found</div> }/>

                </Switch>

                <div className="clearfix"></div>

            </div>

        )
    }

}

export default withRouter(RoutesList);