import { Box, Block, Image, Columns} from "react-bulma-components";

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
            </div>
        </div>
    )
}

export default MaybeResume;