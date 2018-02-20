import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Archive from './pages/Archive/Archive'
import Feedback from './pages/Feedback/Feedback'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Profile from './pages/Profile/Profile'
import Submissions from './pages/Submissions/Submissions'

import { store, history } from './store'

import './assets/styles/normalize.css'
import './assets/styles/fonts.css'
import './assets/styles/base.css'

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/archive' exact component={Archive} />
        <Route path='/feedback' exact component={Feedback} />
        <Route path='/submissions' exact component={Submissions} />
        <Route path='/@channelsuurf' component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
