import produce from 'immer'
import Cookies from 'js-cookie'

import base from './base'

export default base({
  namespace   : 'crassa',
  store       : 'theme',
  initialState: {
    style: 'ligth'
  }
}).extend({
  types  : [ 'UPDATE_THEME' ],
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.UPDATE_THEME:
          Cookies.set('style', action.theme)
          draft.style = action.theme

          return
        default:
          draft.style =  Cookies.get('style') || state.style

          return
      }
    }),
  creators: ({ types: { UPDATE_THEME } }) => ({
    updateTheme: theme => ({ type: UPDATE_THEME, theme })
  })
})
