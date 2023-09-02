import { Box, Block, Image, Columns} from "react-bulma-components";

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
    paragraph: {
        fontSize: '17px',
        textAlign: 'center',
        color: 'white',
        margin: 'auto',
        background: 'DodgerBlue',
        borderRadius: 10,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: '1px',
        padding: '10px',
    }

}

function MaybeAboutMe() {
    return (
        <div>
            <div style={styles.mainContainer}>
                <Columns>
                    <Columns.Column size={4} offset={4}>
                        <h1 style={styles.title}>
                            This is About Me!
                        </h1>
                    </Columns.Column>
                </Columns>

                <Columns>
                    <Columns.Column size={6} offset={3}>
                        <h1 style={styles.text}>
                            A little about myself...
                        </h1>
                    </Columns.Column>
                </Columns>

                <Columns>
                    <Columns.Column size={6} offset={3}>
                        <p style={styles.paragraph}>
                           To those who will be taking the time to read this section, and explore my portfolio, I thank you. 
                           <br></br>
                            My name is Adrian Pablo Frausto, and I am an aspiring Full Stack Web Developer. I am currently enrolled in the UC Berekley -  EdX Coding Bootcamp, and I hope to learn new skills, improve my skills, and gain experience in the field of Web Development. 
                        </p>
                    </Columns.Column>
                </Columns>

            </div>
        </div>
    )
}

export default MaybeAboutMe;