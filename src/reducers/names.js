import { actionsTypes } from '../constants/names'

const INITIAL_STATE = {
    people: []
}

const reducers = (state = INITIAL_STATE, { payload, type }) => {
    const { people } = state
    switch (type) {
        case actionsTypes.NAMES_ADD_PERSON:            
            return { ...state, people: [...people, payload ] }
        default:
            return state
    }
}

export { reducers }
