import React from 'react'
import TextField from 'material-ui/TextField'
import { markdown } from 'markdown-js'

class Field extends React.Component {
  constructor () {
    super()
    this.state = {text: ''}
    this.handleText = this.handleText.bind(this)
  }
  handleText (e) {
    this.setState({ text: e.target.value })
  }
  render () {
    var test
    test = markdown(this.state.text)
    console.log(test)
    return (
      <div className='global'>
        <div className='textzone'>
          <TextField
            id='text'
            multiLine={true}
            fullWidth={true}
            rows={40}
            rowsMax={50}
            style={{backgroundColor: 'white'}}
            value={this.state.text}
            onChange={this.handleText}
          />
        </div>
        <div className='markzone'>
          <div dangerouslySetInnerHTML={{ __html: markdown(this.state.text) }} />
        </div>
      </div>
    )
  }
}

export default Field
