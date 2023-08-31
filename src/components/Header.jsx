
//NavBar goes here. NavBar must have links to the Portfolio/Home, About Me, Resume, and Contact Me pages.
//Potential UI folder???
//Title (The Document.Title?) of page in the NavBar must change with the page itself

export default function Header({ count,  setCount, setItem }) {
    
    return (
        <>

            <button onClick={() => {
                
                setItem('goodbye')
                }}>contact</button>
            <button onClick={() => {
              
                setItem('hello')
                }}>about</button>
            <button onClick={() => {
                setItem('resume')
            }}>resume</button>
        </>
    );
}