import React from 'react'
import ReactDom from 'react-dom'

class Home extends React.Component {
  render() {
    return <div>home page</div>
  }
}

ReactDom.render(
  <Home></Home>,
  document.getElementById('root')
)