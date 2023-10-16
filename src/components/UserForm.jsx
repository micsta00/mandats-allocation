import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function UserForm(props) {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [inputs, setInputs] = useState({ name: "", votes: "" })
    const [data, setData] = useState([])

    function handleOnclick(e) {
        e.preventDefault()
        setData(prev => {
            return [...prev, inputs]
        })
        setInputs({ name: "", votes: "" })
    }

    function handleChange(e) {
        setInputs(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.getData(data)
    }

    console.log(inputs)
    console.log(data)
    return (
        <>
            <input id={nanoid()} type="text" name="name" placeholder='Write 1. party name' value={inputs.name} onChange={handleChange} />
            <input id={nanoid()} type="text" name="votes" placeholder='1. party votes' value={inputs.votes} onChange={handleChange} />
            <button onClick={handleOnclick}>Add</button>
            <button onClick={handleSubmit}>Done</button>
        </>
    )
}