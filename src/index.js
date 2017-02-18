import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './containers/App'
import Main from './containers/Main'
import MovDescr from './containers/MovDescr'
import Favorites from './containers/Favorites'
import './styles/bootstrap.min.css'
import './styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Main}/>   
        <Route path='/favorites' component={Favorites} />
        <Route path='/movie/:id' component={MovDescr} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
