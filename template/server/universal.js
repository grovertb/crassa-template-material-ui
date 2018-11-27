import { sheetsRegistry } from 'containers/Root'

export const setRenderUniversal = htmlData => {
  // const materialStyle = `<style id="jss-server-side">${sheetsRegistry.toString()}</style>`

  const materialStyle = `<style id='jss-server-side' type="text/css">${sheetsRegistry.toString()}</style>`

  return htmlData.replace('<head>', `<head>${materialStyle}`)
}
