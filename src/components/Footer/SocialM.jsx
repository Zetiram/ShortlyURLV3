import React from 'react'
import Facebook from '../../images/icon-facebook.svg'
import Twitter from '../../images/icon-twitter.svg'
import Pinterest from '../../images/icon-pinterest.svg'
import Instagram from '../../images/icon-instagram.svg'
import '../../styles/styles.css'

function SocialM() {
	return(
		<div className="socialM-logos-footer">
				<a href="#"><img src={Facebook} alt="Icon-Facebook"/></a>

				<a href="#"><img src={Twitter} alt="Icon-Twitter"/></a>

				<a href="#"><img src={Pinterest} alt="Icon-Pinterest"/></a>

				<a href="#"><img src={Instagram} alt="Icon-Instagram"/></a>
				
		</div>
	)
}

export default SocialM