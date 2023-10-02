import { Box, Block, Image, Columns } from "react-bulma-components";
import dailyPlanner from "../images/dailyPlanner.png"
import firstProj from "../images/firstProj.png"
import projectImage from "../images/projectImage.png"
import portfolioOne from "../images/portfolioOne.png"
import pwGen from "../images/pwGen.png"
import ccSS from "../images/CCSS.png"



const styles = {
    projects: {
        background: 'DodgerBlue',
        height: 'fit-content',
        width: '100%',
        textAlign: 'center',
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: '2px',
        color: 'white',


    },
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
        padding: '10px',
    },
    links: {
        fontSize: '15px',
        textAlign: 'center',
        color: 'white',
        margin: 'auto',
        padding: '10px',
    }

}

function PortfolioPage() {
    return (
        <>
            <div style={styles.mainContainer}>

                <Columns>
                    <Columns.Column size={4} offset={4}>
                        <h1 style={styles.title}>
                            This is my Portfolio Page!
                        </h1>
                    </Columns.Column>
                </Columns>

                <Columns>
                    <Columns.Column size={6} offset={3}>
                        <h1 style={styles.text}>
                            Here are various applications I have worked on!
                        </h1>
                    </Columns.Column>
                </Columns>

                <Columns>
                    <Columns.Column size={3} offset={1}>
                        <Box style={styles.projects}>
                            <Block style={styles.paragraph}>
                                This is my first assignment in this bootcamp. It's a simple HTML page with a CSS stylesheet, containing notes about what we were to have expected to learn throughout the bootcamp.
                            </Block>
                            <Block>
                                <Image
                                    size='128x256'
                                    src={firstProj}
                                />
                            </Block>
                            <Block>
                                <a href="https://frausto98.github.io/prework-study-guide/prework-study-guide-starter/" style={styles.links}>
                                    Click here to go to my Deployed Application
                                </a>
                                <br></br>
                                <a href="https://github.com/frausto98/prework-study-guide"style={styles.links}>
                                    Click here to go to my GitHub Repository
                                </a>
                            </Block>
                        </Box>
                    </Columns.Column>

                    <Columns.Column size={4}>
                        <Box style={styles.projects}>
                            <Block style={styles.paragraph}>
                                Here is my first collaborative group project! We were tasked with creating a website that would allow users to search for a vacation destination, and then display the weather, and hotels in that area.
                            </Block>
                            <Block>
                                <Image
                                    size='128x256'
                                    src={projectImage}
                                />
                            </Block>
                            <Block>
                                <a href="https://frausto98.github.io/vacationDestination/" style={styles.links}>
                                    Click here to go to my Deployed Application
                                </a>
                                <br></br>
                                <a href="https://github.com/frausto98/vacationDestination"style={styles.links}>
                                    Click here to go to my GitHub Repository
                                </a>
                            </Block>
                        </Box>
                    </Columns.Column>

                    <Columns.Column size={3}>
                        <Box style={styles.projects}>
                            <Block style={styles.paragraph}>
                                This is my second application, which was another simple HTML and CSS page. This time, we were tasked with creating a responsive page, that would change depending on the size of the screen. I did not do so well.
                            </Block>
                            <Block>
                                <Image
                                    size='128x256'
                                    src={portfolioOne}
                                />
                            </Block>
                            <Block>
                                <a href="https://frausto98.github.io/module-02-repo/" style={styles.links}>
                                    Click here to go to my Deployed Application
                                </a>
                                <br></br>
                                <a href="https://github.com/frausto98/module-02-repo"style={styles.links}>
                                    Click here to go to my GitHub Repository
                                </a>
                            </Block>
                        </Box>
                    </Columns.Column>
                </Columns>

                <Columns>
                    <Columns.Column size={3} offset={1}>
                        <Box style={styles.projects}>
                            <Block>
                                This text is above the image
                            </Block>
                            <Block>
                                <Image
                                    size='128x256'
                                    src={pwGen}
                                />
                            </Block>
                            <Block>
                                <a href="https://frausto98.github.io/prework-study-guide/prework-study-guide-starter/" style={styles.links}>
                                    Click here to go to my Deployed Application
                                </a>
                                <br></br>
                                <a href="https://github.com/frausto98/prework-study-guide"style={styles.links}>
                                    Click here to go to my GitHub Repository
                                </a>
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
                                    src={ccSS}
                                />
                            </Block>
                            <Block>
                                <a href="https://frausto98.github.io/prework-study-guide/prework-study-guide-starter/" style={styles.links}>
                                    Click here to go to my Deployed Application
                                </a>
                                <br></br>
                                <a href="https://github.com/frausto98/prework-study-guide"style={styles.links}>
                                    Click here to go to my GitHub Repository
                                </a>
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
                                    src={dailyPlanner}
                                />
                            </Block>
                            <Block>
                                <a href="https://frausto98.github.io/prework-study-guide/prework-study-guide-starter/" style={styles.links}>
                                    Click here to go to my Deployed Application
                                </a>
                                <br></br>
                                <a href="https://github.com/frausto98/prework-study-guide"style={styles.links}>
                                    Click here to go to my GitHub Repository
                                </a>
                            </Block>
                        </Box>
                    </Columns.Column>
                </Columns>
            </div>
        </>
    )
}

export default PortfolioPage;