import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import ColorsList from './ColorsList'
import Color from './Color'
import NewColorForm from './NewColorForm'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorsList defaultColors={defaultColors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm />
        </Route>
        <Route exact path="/colors/:color">
          <Color />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  )
}

export const defaultColors = [
  {
    id: 1,
    color: '344966'
  },
  {
    id: 2,
    color: 'B4CDED'
  },
  {
    id: 3,
    color: '0D1821'
  },
  {
    id: 4,
    color: 'BFCC94'
  }
]

export default App
