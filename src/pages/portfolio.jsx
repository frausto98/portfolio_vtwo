import { Box, Block, Image, Columns} from "react-bulma-components";

const styles = {
    projects: {
        background: 'white',
        height: 'fit-content',
        width: '100%',
        
        
    },
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

function PortfolioPage() {
    return (
        <>
            <div style={styles.mainContainer}>

            <Columns>
            <Columns.Column size={4}  offset={4}>
                <h1 style={styles.title}>
                    This is my Portfolio Page!
                </h1>
            </Columns.Column>
            </Columns>

            <Columns>
                <Columns.Column size={3}  offset={1}>
                    <Box style={styles.projects}>
                        <Block>
                            This text is above the image
                        </Block>
                        <Block>
                            <Image
                                size='128x256'
                                src='./assets/images/firstProj.png'
                            />
                        </Block>
                        <Block>
                            And this is below and it is where it should be even before the image is loaded
                        </Block>
                    </Box>
                </Columns.Column>

                <Columns.Column size={4}>
                    <Box style={styles.projects}>
                        <Block>
                            This text is above the image
                        </Block>
                        <Block>
                            <Image
                                size='128x256'
                                src='./assets/images/projectImage.png'
                            />
                        </Block>
                        <Block>
                            And this is below and it is where it should be even before the image is loaded
                        </Block>
                    </Box>
                </Columns.Column>

                <Columns.Column size={3}>
                    <Box style={styles.projects}>
                        <Block>
                            This text is above the image
                        </Block>
                        <Block>
                            <Image
                                size='128x256'
                                src='./assets/images/portfolioOne.png'
                            />
                        </Block>
                        <Block>
                            And this is below and it is where it should be even before the image is loaded
                        </Block>
                    </Box>
                </Columns.Column>
            </Columns>

            <Columns>
                <Columns.Column size={3}  offset={1}>
                    <Box style={styles.projects}>
                        <Block>
                            This text is above the image
                        </Block>
                        <Block>
                            <Image
                                size='128x256'
                                src='./assets/images/pwGen.png'
                            />
                        </Block>
                        <Block>
                            And this is below and it is where it should be even before the image is loaded
                        </Block>
                    </Box>
                </Columns.Column>

                <Columns.Column size={4}>
                    <Box style={styles.projects}>
                        <Block>
                            This text is above the image
                        </Block>
                        <Block>
                            <Image
                                size='128x256'
                                src='./assets/images/CCSS.png'
                            />
                        </Block>
                        <Block>
                            And this is below and it is where it should be even before the image is loaded
                        </Block>
                    </Box>
                </Columns.Column>

                <Columns.Column size={3}>
                    <Box style={styles.projects}>
                        <Block>
                            This text is above the image
                        </Block>
                        <Block>
                            <Image
                                size='128x256'
                                src='./assets/images/dailyPlanner.png'
                            />
                        </Block>
                        <Block>
                            And this is below and it is where it should be even before the image is loaded
                        </Block>
                    </Box>
                </Columns.Column>
            </Columns>
            </div>
        </>
    )
}

export default PortfolioPage;