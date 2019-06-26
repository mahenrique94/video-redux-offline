import { actionsTypes } from '../constants/names'

const actions = {
    addPerson: newPerson => ({
        payload: newPerson,
        type: actionsTypes.NAMES_ADD_PERSON
    })
}

export { actions }
