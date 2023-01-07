import { useReducer, useState } from "react"
import { Button } from "react-bootstrap"
const num = 0

const counterReducers = (state, action) => {
    if (action.type === "ADD-NUM") {
        state++
    }
    return state
}
const [text, setText] = useState('')
export const ReducersApp = () => {
    const [state, dispatch] = useReducer(counterReducers, [])

    const inc = () => {
        dispatch({
            type: "ADD-NUM",
            payload: '',
        })
    }
    return (
        <div>
            <h1>{state}</h1>
            <input />
            <Button onClick={inc}>inc</Button>
        </div>
    )
}