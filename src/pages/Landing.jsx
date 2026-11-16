
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
                    Track every application, interview, and offer in one place. Jobster helps you stay organized through your job search so you never miss a follow-up.
                </p>
                <Link to="/register" className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={Main} alt="image not found" className='img main-img' />
        </div>
    </Wrapper>
  )
}


export default Landing