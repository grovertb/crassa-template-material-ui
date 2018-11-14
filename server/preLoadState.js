import { sheetsRegistry } from 'containers/Root'

export default function(req, res, next) {
  // Get store from locals
  const { htmlData } = res.locals

  const materialStyle = `<style id="jss-server-side">${sheetsRegistry.toString()}</style>`

  res.locals.htmlData = htmlData.replace('<body>', `<body>${materialStyle}`)

  // Pass middlerware
  next()
}
