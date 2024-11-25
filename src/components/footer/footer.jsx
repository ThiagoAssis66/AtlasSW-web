import React from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'


import './footer.css'
import logo from '../../assets/AtlasV1.png'


function Footer() {
  return (
    <footer className="Footer" role="contentinfo">
      <div className="Footer-content">
        <img src={logo} alt="Logo" className="Footer-logo" />
        <p className='Footer-text'>© 2024 Atlas Software Work LTDA. - Todos os direitos reservados</p>
        <div className="Footer-icons">
          <a href="https://www.linkedin.com/company/atlas-software-work/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="Footer-icon" />
          </a>
          <a href="https://www.instagram.com/atlassw.tech/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="Footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
