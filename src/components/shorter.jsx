import {useEffect, useState} from 'react'
import '../styles/styles.css'
import Shortened from './showurl.jsx'

function Short(){
	const [user, setUser] = useState("")
	const [url, setUrl] = useState("")
	const [short, setShort] = useState("")
	const [error, setError] = useState("")
	const [cause, setCause] = useState("")
	const [active, setActive] = useState(false)
	let key = '3PMfIHsyMtZ9I7dn073V4JlWq4VYFy38hzYIlTZtGmvmb'
	const dato = JSON.stringify({ url: user})

	const shortURL = async (body) => {
	
	if(user === null || user === "" || user === undefined) {
		setCause("Please, write an URL")
		setError(true)
	} else {

	fetch(`https://shrtlnk.dev/api/v2/link`, {
    method: `POST`,
    headers: {
    	'api-key': `${key}`,
      accept: `application/json`,
     'content-type': `application/json`,
    },
    body: dato
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    link(data, body)
  })
  .catch(error => console.error(error));

}
	}

const link = (data, body) => {
		if(data) {
			setActive(true)


			const originalUrl = data.url
			const shortUrl = data.shrtlnk

			setUrl(originalUrl)
			setShort(shortUrl)
			setError(false)
		} else {
			setCause(data.message)
			setError(true)
			setActive(false)
			console.log(data)

	}
}



	return(
		<div className="Short-Container">
			<div className="Short-Url">
				<div className="Short-Form">	
					<div className="Error">
						{error === true ? <input type="text" className="inputError" value={user} onChange={(e) => {setUser(e.target.value)}} placeholder="Shorten a link here..."/> : <input type="text" className="input" value={user} onChange={(e) => {setUser(e.target.value)}} placeholder="Shorten a link here..."/>}
						{error === true ? <span className="error">{cause}</span> : ''}
					</div>
					<button onClick={shortURL}>Shorten it!</button>
				</div>
			
			</div>

			{active === true ? <Shortened url={url} short={short}/> : ''}



</div>
			

	)
}

export default Short