import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import { a } from './tree-shaking'

class Home extends React.Component {
  render() {
    return <div className='text'>home page</div>
  }
}

ReactDom.render(
  <Home></Home>,
  document.getElementById('root')
)