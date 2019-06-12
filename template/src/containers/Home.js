import React, { Component } from 'react'
import { connect } from 'react-redux'

import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import ThreeDRotation from '@material-ui/icons/ThreeDRotation'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'

import themeReducer from 'reducers/theme'
import logo from 'assets/img/logo.svg'

const styles = (/* theme */) => ({
  '@keyframes App-logo-spin': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  },
  appContainer: {
    textAlign: 'center'
  },
  appHeader: {
    alignItems     : 'center',
    backgroundColor: '#282c34',
    color          : 'white',
    display        : 'flex',
    flexDirection  : 'column',
    fontSize       : 'calc(10px + 2vmin)',
    justifyContent : 'center',
    minHeight      : '100vh'
  },
  appLink: {
    color: '#61dafb'
  },
  appLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height   : '40vmin'
  }
})

class Home extends Component {
  state = {
    checkedB: false,
    loaded  : false
  }

  componentDidMount() {
    this.setState({
      loaded: true
    })
  }

  render() {
    const { loaded } = this.state

    const {
      classes: {
        appContainer,
        appHeader,
        appLink,
        appLogo
      },
      theme: {
        style
      },
      updateTheme
    } = this.props

    return (
      <div>
        <Switch
          checked={style === 'ligth'} color='primary' onChange={() => updateTheme(style === 'ligth' ? 'dark' : 'ligth')}
          value='checkedB' />
        <Button>Default</Button>
        <Button color='primary'>Primary</Button>
        <Button color='secondary'>Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button href='#text-buttons'>Link</Button>
        <Button color='primary' variant='contained'>
          Primary
        </Button>
        <Button color='secondary' variant='contained'>
          Secondary
        </Button>
        <Fab color='primary' variant='round'>
          <AccessAlarmIcon />
        </Fab>
        <Fab aria-label='Edit' color='secondary'>
          <ThreeDRotation />
        </Fab>
        <Fab aria-label='Delete' variant='extended'>
          <ThreeDRotation />
          Extended
        </Fab>
        <input
          accept='image/*' id='flat-button-file' multiple
          style={{ display: 'none' }} type='file' />
        <label htmlFor='flat-button-file'>
          <Button component='span'>Upload</Button>
        </label>
        <div className={appContainer}>
          <header className={appHeader}>
            {
              loaded && <img alt='logo' className={appLogo} src={logo} />
            }
            <Typography color='inherit' variant='h5'>
              Edit <code>src/containers/Home.js</code> and save to reload.
            </Typography>
            <a
              className={appLink}
              href='https://github.com/ghondar/crassa'
              rel='noopener noreferrer'
              target='_blank'>
              crassa v0.4.5
            </a>
          </header>
        </div>
      </div>
    )
  }
}

export default connect(
  ({ theme, products }) => ({
    products,
    theme
  }),
  {
    updateTheme: themeReducer.creators.updateTheme
  }
)(withStyles(styles)(Home))
