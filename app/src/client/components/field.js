import React from 'react'
import TextField from 'material-ui/TextField'
import { markdown } from 'markdown-js'
import {Card, CardText} from 'material-ui/Card'

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
    return (
      <div className='global'>
        <div className='textzone'>
          <Card>
            <TextField
              id='text'
              multiLine={true}
              fullWidth={true}
              rows={50}
              rowsMax={50}
              style={{backgroundColor: '#fffefc'}}
              value={this.state.text}
              onChange={this.handleText}
            />
          </Card>
        </div>
        <div>
          <Card className='markzone'>
            <CardText>
              <p dangerouslySetInnerHTML={{ __html: markdown(this.state.text) }} />
            </CardText>
          </Card>
        </div>
      </div>
    )
  }
}

export default Field
