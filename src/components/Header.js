import logoImg from '../images/bananaTransparent.png'
import './header.css'

export default function Header() {
    return(
        <div className='header-container'>
            <div className='logo'>
                <img className='logo-img' src={logoImg} alt='logoImg'></img>
                <h2 className='logo-text main-logo-text'>Matvareinnholdskalkulator</h2>
                <h2 className='logo-text alternate-logo-text'>Matinnhold</h2>
            </div>
        </div>
    )
}