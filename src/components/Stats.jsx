import '../styles/styles.css'

function Stats({img, title, text}){
	return(
		<div className="stats-cards">
			<div className="stats-icons-container">
				<img className="stats-icons" src={img}/>
			</div>

			<h3 className="stats-title">{title}</h3>

			<p className="stats-text">{text}</p>
		</div>
	)
}

export default Stats