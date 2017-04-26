import React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class Navbar extends React.Component {
  render () {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              showMenuIconButton={false}
              style={{backgroundColor: 'black'}}
              title='MarkDown Editor'
              iconClassNameRight='muidocs-icon-navigation-expand-more'
              />
            <div>
              {this.props.children}
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Navbar
