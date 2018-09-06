// import reducers
// import action creators
// combiane reducers
// combiane action creators
import {combineReducers} from 'redux'

import treebarReducer from '../../components/TreeBar/treebarRedux'
import eventdropReducer from '../../components/EventDrop/eventdropRedux'
import headerReducer from '../../components/Header/headerRedux'

import * as treebarActions from '../../components/TreeBar/treebarRedux'
import * as eventdropActions from '../../components/EventDrop/eventdropRedux'
import * as headerActions from '../../components/Header/headerRedux'

export default combineReducers({
    treebar: treebarReducer,
    eventdrop: eventdropReducer,
    header: headerReducer
})
export const homeActions = {
    treebar: treebarActions,
    eventdrop: eventdropActions,
    header: headerActions
}