import '../styles/styles.css'

function StatsTitle({title, desc}) {
	return(
		<div className="Advanced-Stats">
				<h2>{title}</h2>

				<p>
					{desc}
				</p>
		</div>
	)
}

export default StatsTitle