import React, { Component } from 'react'
import SimpleFormat from 'react-simple-format'

export default class App extends Component {
  render () {
    const text = 'hello\n\nworld'
    return (
      <SimpleFormat text={ text } />
    )
  }
}
