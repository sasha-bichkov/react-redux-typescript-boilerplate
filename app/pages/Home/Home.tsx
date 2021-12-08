import React from 'react'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

import './Home.scss'

function Bomb():never {
  throw new Error('💥 CABOOM 💥')
}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return(
      <div>
        Home page
        <Bomb/>
      </div>
    )
  }
}

export default Home
