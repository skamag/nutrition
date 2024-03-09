import logoImg from '../images/carrot.jpeg'
import './header.css'

export default function Header() {
    return(
        <div className='header-container'>
            <div className='logo'>
                <img className='logo-img' src={logoImg} alt='logoImg'></img>
                <h1 className='logo-text'>Logo-tekst</h1>
            </div>
        </div>
    )
}