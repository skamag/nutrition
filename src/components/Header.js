import logoImg from '../images/carrot.jpeg'
import './header.css'

export default function Header() {
    return(
        <div className='header-container'>
            <div className='logo'>
                <img className='logo-img' src={logoImg} alt='logoImg'></img>
                <h2 className='logo-text'>Matvareinnholdskalkulator</h2>
            </div>
        </div>
    )
}