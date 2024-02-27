import '../styles/styles.css'

function Burger({clss}) {
	return(
		<div className={clss}>
				<div className="menu-nav">
					<ul>
						<li>Features</li>
					</ul>

					<ul>
						<li>Pricing</li>
					</ul>

					<ul className="resources">
						<li>Resources</li>
					</ul>
				</div>

				<hr className="hr-menu"/>

				<div className="menu-login">
				
					<ul className="login-ul">
						<li>Login</li>
					</ul>

					<button className="sign-btn">Sign Up</button>
				</div>
		</div>

)
}

export default Burger;