import working from '../images/illustration-working.svg'
import '../styles/styles.css'

function MoreThan() { 
	return(
		<div className="Description-Working">
			<div>
				<img className="working" src={working} alt=""/>
			</div>

			<div className="moreThanDescription">
				<h1>More than just shorter links</h1>

				<p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>

				<button className="Get-Started-btn">Get Started</button>
			</div>
		</div>
	)
}

export default MoreThan