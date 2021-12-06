import React from 'react'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

import './Home.scss'

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return(
      <div>Home page!</div>
    )
  }
}

export default Home
