import { useState, useRef } from 'react'
import { Box, Block, Image, Columns, Form, Button } from "react-bulma-components";
import emailjs from '@emailjs/browser'

const styles = {
    mainContainer: {
        background: 'DodgerBlue',
        padding: '20px',
        
    },
    title: {
        background: 'DodgerBlue',
        color: 'white',
        borderRadius: 10,
        margin: 'auto',
        textAlign: 'center',
        fontSize: '40px',
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: '5px',
    },
    text: {
        fontSize: '25px',
        textAlign: 'center',
        color: 'white',
        margin: 'auto',
        background: 'DodgerBlue',
        borderRadius: 10,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: '2px',
    },
    form: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderRadius: 10,
        background: 'DodgerBlue',
    },
    inputField: {
        backgroundColor: 'DodgerBlue',

    },
    button: {
        backgroundColor: 'White',
        padding: '20px',
        borderRadius: 10,

    
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
        // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === 'user_email') {
      setEmail(inputValue);
    } else if (inputType === 'user_name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
    }

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_dr56wji',
        'template_jgjujpw',
        form.current,
        'AwYjYAhO_wBjItUS4')
      .then((result) => {
          console.log(result.text);
        //   console.log(name, email, message)
        //   alert(`Thank you for your message, ${name}!`)
          setName('')
          setEmail('')
          setMessage('')
      }, (error) => {
          console.log(error.text);
      });
    }

    // const handleFormSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(name, email, message)
    //     alert(`Thank you for your message, ${name}!`)
    //     setName('')
    //     setEmail('')
    //     setMessage('')
    // }


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
                    <Columns.Column size={6} offset={3}>
                        <h1 style={styles.text}>
                            Simply fill out the form below and I will get back to you as soon as possible! It will not actually work!!
                        </h1>
                    </Columns.Column>
                </Columns>

                <Columns>
                    <Columns.Column size={4} offset={4}>
                        <Form.Field className="form" domRef={form} style={styles.form} onSubmit={sendEmail}>
                            <Form.Control>
                                <div>
                                    <Form.Input
                                        value={name}
                                        name="user_name"
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder='Name'
                                        //style={styles.inputField}
                                    />
                                </div>

                                <br></br>

                                <div>
                                    <Form.Input
                                        value={email}
                                        name="user_email"
                                        onChange={handleInputChange}
                                        type="email"
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

                                <div >
                                    <Button type="submit" style={styles.button}>Send Message!</Button>
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