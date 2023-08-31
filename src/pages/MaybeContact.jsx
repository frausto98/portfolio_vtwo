import { useState } from 'react'

export default function MaybeContact  () {

    // useState is a hook that allows us to use state in a functional component
    // a hook is a function that allows us to do something with the component
    // a component is a function that returns JSX

    const [name, setName]  = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleInputChange = (e)  => {
        const {name, email, message} = e.target
        if (name === 'name') {
            setName(name)
        } else if (email === 'email') {
            setEmail(email)
        } else {
            setMessage(message)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, message)
        alert(`Thank you for your message, ${name}!`)
        setName('')
        setEmail('')
        setMessage('')
    }


    return (
        <div>
            <form className="form" onSubmit={handleFormSubmit}>
                <input 
                value={name} 
                name="name" 
                onChange={handleInputChange} 
                type="text" 
                placeholder='Name'
                />
                
                <input 
                value={email} 
                name="email" 
                onChange={handleInputChange} 
                type="text" 
                placeholder='Email'
                />

                <input 
                value={message} 
                name="message" 
                onChange={handleInputChange} 
                type="text" 
                placeholder='Enter Message Here'
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}