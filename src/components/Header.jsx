
//NavBar goes here. NavBar must have links to the Portfolio/Home, About Me, Resume, and Contact Me pages.
//Potential UI folder???
//Title (The Document.Title?) of page in the NavBar must change with the page itself
import 'bulma/css/bulma.min.css'
import {Button} from 'react-bulma-components'

const styles = {
    card: {
        margin: 20,
        padding: 20,
        background: '#e8eaf6',
    },
    heading: {
        background: '#9a74db',
        minHeight: 50,
        width: '11%',
        lineHeight: '50px',
        fontSize: '20px',
        color: 'white',
        padding: '0 20px',
    },
    buttons: {
        background: 'red',
        alignItems: 'right',
        justifyContent: 'center',
    }
};

function Header({ setPage }) {
    
    return (
        <div style={styles.card}>

            <div style={styles.heading}>
                Adrian Pablo Frausto
            </div>

            <div style={styles.buttons}>
            <button onClick={() => {
                setPage('portfolio')
            }}>Portfolio</button>

            <button onClick={() => {

                setPage('about me')
            }}>About Me</button>

            <button onClick={() => {

                setPage('resume')
            }}>Resume</button>

            <button onClick={() => {

                setPage('contact')
            }}>Contact</button>
            </div>

        </div>
    );
}

export default Header;