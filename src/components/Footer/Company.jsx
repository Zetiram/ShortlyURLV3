import React from 'react'

function Company({Company1, Company2, Company3, Company4}) {
	return(
		<div className="footer-sections">
				<h4>Company</h4>

				<ul>
					<li><a href="#">{Company1}</a></li>
				</ul>
				<ul>
					<li><a href="#">{Company2}</a></li>
				</ul>
				<ul>
					<li><a href="#">{Company3}</a></li>
				</ul>
				<ul>
					<li><a href="#">{Company4}</a></li>
				</ul>
		</div>
	)
}

export default Company