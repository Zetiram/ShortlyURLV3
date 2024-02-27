import Company  from './Footer/Company.jsx'
import Features  from './Footer/Features.jsx'
import Resources  from './Footer/Resources.jsx'
import SocialM from './Footer/SocialM.jsx'
import logo from '../images/logo-footer.svg'
import '../styles/styles.css'

function Footer() {
	return(
		<footer className="Footer">
			<div>
				<img src={logo} alt=""/>
			</div>

			<Features
			Feature1="Link Shortening"
			Feature2="Branded Links"
			Feature3="Analytics"
			/>

			<Resources
			Resource1="Blog"
			Resource2="Developers"
			Resource3="Supports"/>

			<Company
			Company1="About"
			Company2="Our Team"
			Company3="Carrers"
			Company4="Contacts"/>

			<SocialM/>
		
		</footer>
	)
}

export default Footer