import Faker from 'faker'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../actions/names'
import { selectors } from '../selectors/names'

const Names = () => {
    const dispatch = useDispatch()
    const people = useSelector(selectors.getPeoploe)

    const handleClick = () => dispatch(actions.addPerson(Faker.name.findName()))

    return (
        <>
            <button onClick={handleClick} type="button">Add new person</button>
            <ul>
                { people.map(person => <li key={ person }>{ person }</li>)}
            </ul>
        </>
    )
}

export default Names
