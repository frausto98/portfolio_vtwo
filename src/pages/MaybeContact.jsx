import { useState } from 'react'
import { Box, Block, Image, Columns, Form, Button } from "react-bulma-components";

const styles = {
    mainContainer: {
        background: 'DodgerBlue',
    },
    title: {
        background: 'white',
        borderRadius: 10,
        margin: 'auto',
        textAlign: 'center',
        fontSize: '40px',
    }

}

function MaybeContact() {

    // useState is a hook that allows us to use state in a functional component
    // a hook is a function that allows us to do something with the component
    // a component is a function that returns JSX

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleInputChange = (e) => {
        const { name, email, message } = e.target
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
            <div style={styles.mainContainer}>
                <Columns>
                    <Columns.Column size={4} offset={4}>
                        <h1 style={styles.title}>
                            This is to Contact Me!
                        </h1>
                    </Columns.Column>
                </Columns>

                <Columns>
                    <Columns.Column size={4} offset={4}>
                        <Form.Field className="form" onSubmit={handleFormSubmit}>
                            <Form.Control>
                                <div>
                                    <Form.Input
                                        value={name}
                                        name="name"
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder='Name'
                                    />
                                </div>

                                <br></br>

                                <div>
                                    <Form.Input
                                        value={email}
                                        name="email"
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder='Email'
                                    />
                                </div>

                                <br></br>

                                <div>
                                    <Form.Textarea
                                        value={message}
                                        name="message"
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder='Enter Message Here'
                                    />
                                </div>

                                <br></br>

                                <div>
                                    <Button type="submit">Send Message!</Button>
                                </div>
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>
                </Columns>
            </div>
        </div>
    )
}

export default MaybeContact