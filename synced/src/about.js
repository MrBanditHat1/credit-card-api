import { Link } from 'react-router-dom';



function About(){
    return(
        <div>
            <h1>About page</h1>
            <Link to="/" style={{ padding: 5 }}>
                Home
            </Link>
        </div>
    )
}



export default About