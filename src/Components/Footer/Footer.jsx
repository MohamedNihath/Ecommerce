import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icone from '../Assets/instagram_icon.png'
import pintester_icone from '../Assets/pintester_icon.png'
import whatsapp_icone from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo}/>
            <p>SHOPPER</p>

        </div>

        <ul className="footer-Links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>Aboute</li>
            <li>Conduct</li>
        </ul>

        <div className="footer-social-icones">
            <div className="footer-icones-container">
                <img src={instagram_icone}/>
            </div>
            <div className="footer-icones-container">
                <img src={pintester_icone}/>
            </div>
            <div className="footer-icones-container">
                <img src={whatsapp_icone}/>
            </div>
        </div>

        <div className="footer-coppyright">
            <hr/>

            <p>Copyright @ 2024 - All Right Reserved. </p>
        </div>
      
    </div>
  )
}

export default Footer
