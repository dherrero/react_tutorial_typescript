import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/styles/index.css'
import { Home, About, Notfound } from './pages'
import { Menu } from './components'

ReactDOM.render(
    <Router>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={Notfound} />
        </Switch>
    </Router>
    ,
    document.getElementById('root')
);
