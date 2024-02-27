import React from 'react'

function Features({Feature1, Feature2, Feature3}) {
	return(
		<div className="footer-sections">
				<h4>Features</h4>

				<ul>
					<li><a href="#">{Feature1}</a></li>
				</ul>
				<ul>
					<li><a href="#">{Feature2}</a></li>
				</ul>
				<ul>
					<li><a href="#">{Feature3}</a></li>
				</ul>
		</div>
	)
}

export default Features