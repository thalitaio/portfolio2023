import React from 'react'
import './footer.css'

const Footer = () => {
  return (
      <footer className="footer" id='footer'>
          <div className="footer__container container">
              <h1 className="footer__title">Thalita</h1>

              <ul className="footer__list">
                  <li>
                      <a href="#about" className="footer__link">About</a>
                  </li>
              </ul>

              <div className="footer__social">
                <a href="https://www.instagram.com/yosoythalita/" className="footer__social-link" target="_blank" rel="noreferrer">
                <i class="uil uil-instagram"></i>
                  </a>
                  
                  <a href="https://www.instagram.com/saturnus.tech/" className="footer__social-link" target="_blank" rel="noreferrer">
                <i class="uil uil-instagram"></i>
                </a>


                <a href="https://github.com/thalitaio" className="footer__social-link" target="_blank" rel="noreferrer">
                <i class="uil uil-github-alt"></i>
                </a>
              </div>

              <span className='footer__copy'>
                  &#169; Thalita Nunes. All rights reserved
              </span>
          </div>
    </footer>
  )
}

export default Footer