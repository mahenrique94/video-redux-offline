import { combineReducers } from 'redux'

import { reducers as namesReducers } from './names'

const reducers = combineReducers({
    namesReducers
})

export { reducers }
