
//Must have icons for LinkedIn, GitHub, and a third party on every page
import  {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

const styles = {
    footer: {
        background: 'DodgerBlue',
        height: 'fit-content',
        width: '100%',
        textAlign: 'center',
        fontSize: '40px',
    },

    link:{
        color: 'white',
    }
}

function Footer() {
    
    return (
        <div style={styles.footer}>
            <span >
            <a style={styles.link}><FaGithub/></a>
            <a style={styles.link}><FaLinkedin/></a>
            </span>
        </div>
    );
}
export default Footer;