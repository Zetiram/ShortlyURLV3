import React from 'react' 

function Resources({Resource1, Resource2, Resource3}) {
	return(
			<div className="footer-sections">
				<h4>Resources</h4>

				<ul>
					<li><a href="#">{Resource1}</a></li>
				</ul>
				<ul>
					<li><a href="#">{Resource2}</a></li>
				</ul>
				<ul>
					<li><a href="#">{Resource3}</a></li>
				</ul>
			</div>
	)
}
export default Resources