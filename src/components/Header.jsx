
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
        minHeight: 50,
        width: '14%',
        lineHeight: '50px',
        fontSize: '20px',
        color: 'black',
        padding: '0 20px',
        textAlign: 'center',
    },
    buttons: {

        width: 'fit-content',
        height: 'fit-content',
        padding: '0 0 0 900px',
    },
    mainContainer: {
        background: 'DodgerBlue',
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
                    }}>About Me</Button>

                    <Button
                        onClick={() => {
                            setPage('portfolio')

                        }}>Portfolio</Button>


                    <Button onClick={() => {

                        setPage('resume')
                    }}>Resume</Button>

                    <Button onClick={() => {

                        setPage('contact')
                    }}>Contact</Button>
                </div>


            </div>
        </div>
    );
}

export default Header;