import {useState} from 'react'
import Burger from './burger.jsx'
import logo from '../images/logo.svg'
import menu from '../images/icon-menu.svg'
import '../styles/styles.css'

function NavBar() {
	const [active, setActive] = useState(false)
	const toggle = () => {
		setActive(!active)
	}
	return(
		<header>
			<nav className="logo-menu-container">
					<div className="logo-container">
						<img src={logo} alt=""/>

					<div className="menu-nav-pc">
						<ul>
							<li><a href="#">Features</a></li>
						</ul>

						<ul>
							<li><a href="#">Pricing</a></li>
						</ul>

						<ul className="resources">
							<li><a href="#">Resources</a></li>
						</ul>
					</div>
					</div>

					

					

				<div className="menu-login-pc">
				
					<ul className="login-ul">
						<li><a href="#">Login</a></li>
					</ul>

					<button className="sign-btn">Sign Up</button>
				</div>

				<div>
					<img src={menu} className="menu" onClick={toggle} alt=""/>
				</div>
			</nav>
			<Burger
			clss={active === true ? 'sign-container' : 'sign-container active'}
			/>
		</header>

)
}

export default NavBar;