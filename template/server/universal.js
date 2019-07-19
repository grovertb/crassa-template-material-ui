import React from 'react'
import { renderToString } from 'react-dom/server'

import CssBaseline from '@material-ui/core/CssBaseline'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import {
  ServerStyleSheets,
  ThemeProvider
} from '@material-ui/styles'

import MaterialTheme from 'utils/MaterialTheme'

export const setRenderUniversal = (locals, app) => {
  let { htmlData, store } = locals

  const { theme: { style } } = store.getState()

  const theme = createMuiTheme(MaterialTheme[style])
  const sheets = new ServerStyleSheets()

  const renderString = renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {app}
      </ThemeProvider>
    )
  )

  const materialStyle = `<style id="jss-server-side">${sheets.toString()}</style>`

  return {
    prevHtml: htmlData.replace('<head>', `<head>${materialStyle}`),
    renderString
  }
}
