import React from 'react'
import ReactDOM from 'react-dom'

import { IAction } from '@Root/types'

interface AppProps {
}

interface AppState {
}

import './App.scss'

class App extends React.Component<AppProps, AppState> {
  render() {
    return(
      <div>Hello world [2][2]!</div>
    )
  }
}

console.log("tasdas")
const rootElement = document.getElementById('main') as HTMLElement

ReactDOM.render(
  <App />,
  rootElement
)
