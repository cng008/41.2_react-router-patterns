import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import ColorsList from './ColorsList'
import Color from './Color'
import NewColorForm from './NewColorForm'

const Routes = () => {
  const initialColors = [
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
      color: '6BA4FF'
    },
    {
      id: 4,
      color: 'BFCC94'
    }
  ]

  const [colors, setColor] = useState(initialColors)
  const handleAdd = newColor => {
    setColor(prevColors => [...prevColors, { color: newColor, id: uuid() }])
  }

  const renderCurrentColor = props => {
    const { color } = props.match.params
    const hex = colors[color]
    return <Color {...props} hex={hex} color={color} />
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorsList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={handleAdd} />
        </Route>
        <Route exact path="/colors/:color" render={renderCurrentColor} />
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
