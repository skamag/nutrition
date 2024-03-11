import './footer.css'

export default function Footer() {
    return(
        <div className="footerContainer">
            <div class="socialsContainer">
                <a href="https://linkedin.com/in/magne-svarverud-skaro" class="fa fa-socials fa-linkedin"> </a>
                <a href="https://github.com/skamag" class="fa fa-socials fa-github"> </a>
                <a href="https://facebook.com/magne.svarverudskaro" class="fa fa-socials fa-facebook"> </a>
            </div>
            <p><i className='fa fa-copyright'></i> 2024 Matvareinnholdskalkulator ASA</p>
        </div>
    )
}