import { Box, Block, Image, Columns } from "react-bulma-components";

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
    },
    iframeBox: {
        width: '100%',
        height: '75vh'
    }

}

function MaybeResume() {
    return (
        <div>
            <div style={styles.mainContainer}>
            <Columns>
                    <Columns.Column size={4} offset={4}>
                        <h1 style={styles.title}>
                            This is my Resume Page!
                        </h1>
                    </Columns.Column>
                </Columns>
                {/* <Columns>
                    <Columns.Column size={6} offset={3}>
                        <h1 style={styles.text}>
                            This is to read more more about my skills!
                        </h1>
                    </Columns.Column>
                </Columns> */}

                <Columns>
                    <Columns.Column size={6} offset={3}>
                        <div>
                            <Block >
                                {/* <p style={styles.paragraph}>
                                    Below is my resume as it currently stands. I have to adjust it to  reflect  the new skills I've developed for the  class.
                                </p> */}
                            </Block>
                            <Block>
                                
                            <iframe style= {styles.iframeBox} src="https://docs.google.com/document/d/e/2PACX-1vQdbDHXeUvIbrLx4UwypuWYwBxmMDooYel1svnG8d0pmZlThPjJYBHdg7kK6OsvKb1xOgTfGnSS-Ej7/pub?embedded=true"></iframe>
                            </Block>

                        </div>
                    </Columns.Column>
                </Columns>
            </div>
        </div>
    )
}

export default MaybeResume;