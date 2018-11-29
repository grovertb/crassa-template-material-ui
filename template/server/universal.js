import React, { Fragment } from 'react'
import { renderToString } from 'react-dom/server'

import { SheetsRegistry } from 'jss'
import JssProvider from 'react-jss/lib/JssProvider'

import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName'

import MaterialTheme from 'lib/MaterialTheme'

export const setRenderUniversal = (html, app, store) => {
  const { theme: { style } } = store.getState()

  const sheetsRegistry = new SheetsRegistry()
  const sheetsManager = new Map()
  const theme = createMuiTheme(MaterialTheme[style])
  const generateClassName = createGenerateClassName()

  const routeMarkup = renderToString(
    <JssProvider generateClassName={generateClassName} registry={sheetsRegistry}>
      <MuiThemeProvider sheetsManager={sheetsManager} theme={theme}>
        <Fragment>
          <CssBaseline />
          {app}
        </Fragment>
      </MuiThemeProvider>
    </JssProvider>
  )

  const materialStyle = `<style id="jss-server-side">${sheetsRegistry.toString()}</style>`

  return {
    routeMarkup,
    prevHtml: html.replace('<head>', `<head>${materialStyle}`)
  }
}
