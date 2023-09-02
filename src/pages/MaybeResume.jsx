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

}

function MaybeResume() {
    return (
        <div>
            <div style={styles.mainContainer}>
                <Columns>
                    <Columns.Column size={4} offset={4}>
                        <h1 style={styles.title}>
                            This is my Resume!
                        </h1>
                    </Columns.Column>
                </Columns>

                <Columns>
                    <Columns.Column size={6} offset={3}>
                        <h1 style={styles.text}>
                            Here, I will display my resume.. in  the future!
                        </h1>
                    </Columns.Column>
                </Columns>
            </div>
        </div>
    )
}

export default MaybeResume;