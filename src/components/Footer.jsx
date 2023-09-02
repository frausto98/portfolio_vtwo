
//Must have icons for LinkedIn, GitHub, and a third party on every page
import  {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

const styles = {
    footer: {
        background: 'white',
        height: 'fit-content',
        width: '100%',
        textAlign: 'center',
        fontSize: '40px',
    },

    link:{
        color: 'dodgerblue',
    }
}

function Footer() {
    
    return (
        <div style={styles.footer}>
            <span >
            <a href="https://github.com/frausto98"style={styles.link}><FaGithub/></a>
            <a href="https://www.linkedin.com/in/adrian-frausto-0941a624a"style={styles.link}><FaLinkedin/></a>
            </span>
        </div>
    );
}
export default Footer;