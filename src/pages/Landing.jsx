
import { Link } from 'react-router-dom'
import Main from '../assets/images/main.svg'
import { Wrapper } from '../assets/wrappers/landingpage'
import {Logo} from '../components'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page">
            <div className="info">
                <h1>job <span>tracking</span> app</h1>
                <p>
                    Swag vinyl cliche polaroid, hot chicken viral semiotics portland tumblr vexillologist crucifix salvia hexagon. Hoodie trust fund normcore lyft.
                </p>
                <Link to="/register" className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={Main} alt="image not found" className='img main-img' />
        </div>
    </Wrapper>
  )
}


export default Landing