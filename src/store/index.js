import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import reducers from '../reducers'

export const history = createHistory()

export const store = createStore(
  connectRouter(history)(combineReducers(reducers)),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history) // For dispatching history actions
    )
  )
)
