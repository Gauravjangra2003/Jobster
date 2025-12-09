import Logo from '../assets/images/logo.svg'
import Main from '../assets/images/main.svg'


const Landing = () => {
  return (
    <main>
        <nav>
            <img src={Logo} alt="logoo not found" />
        </nav>
        <div className="conatiner page">
            <div className="info">
                <h1>job <span>tracking</span> app</h1>
                <p>
                    Swag vinyl cliche polaroid, hot chicken viral semiotics portland tumblr vexillologist crucifix salvia hexagon. Hoodie trust fund normcore lyft.
                </p>
                <button className='btn btn-hero'>Login/Register</button>
            </div>
            <img src={Main} alt="image not found" className='img main-img' />
        </div>
    </main>
  )
}

export default Landing