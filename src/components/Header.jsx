
//NavBar goes here. NavBar must have links to the Portfolio/Home, About Me, Resume, and Contact Me pages.
//Potential UI folder???
//Title (The Document.Title?) of page in the NavBar must change with the page itself

import { Button } from 'react-bulma-components'
import { ButtonGroup } from 'react-bulma-components'

const styles = {
    card: {
        //margin: 20,
        padding: 20,

        display: 'flex',
    },
    heading: {
        background: 'white',
        borderRadius: 15,
        borderColor: 'dodgerblue',
        borderStyle: 'solid',
        borderWidth: '5px',
        minHeight: 50,
        width: 'fit-content',
        lineHeight: '50px',
        fontSize: '20px',
        color: 'dodgerblue',
        padding: '0 20px',
        textAlign: 'center',
    },
    buttons: {

        width: 'fit-content',
        height: 'fit-content',
        padding: '0 0 0 900px',
    },
    mainContainer: {
        background: 'white',
    },
    oneButton: {
        background: 'white',
        borderRadius: 15,
        borderColor: 'dodgerblue',
        borderStyle: 'solid',
        borderWidth: '2px',
        color: 'dodgerblue',
    }

};

function Header({ setPage }) {

    return (

        <div style={styles.mainContainer}>
            <div style={styles.card}>


                <div style={styles.heading}>
                    Adrian Pablo Frausto
                </div>

                <div style={styles.buttons}>

                    <Button onClick={() => {

                        setPage('about me')
                    }} style={styles.oneButton}>About Me</Button>

                    <Button
                        onClick={() => {
                            setPage('portfolio')

                        }} style={styles.oneButton}>Portfolio</Button>


                    <Button onClick={() => {

                        setPage('resume')
                    }} style={styles.oneButton}>Resume</Button>

                    <Button onClick={() => {

                        setPage('contact')
                    }} style={styles.oneButton}>Contact</Button>

                    
                </div>


            </div>
        </div>
    );
}

export default Header;