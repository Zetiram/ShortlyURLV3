import '../styles/styles.css'
import CopyToClipboard from 'react-copy-to-clipboard'


function Shortened({url, short}){
	return(
		<div className="result">
			<span className="result-Url">{url}</span>
			<hr/>
			<span className="result-Short">{short}</span>
			
			<CopyToClipboard text={short}>
				<button className="copy">Copy!</button>
			</CopyToClipboard>
		</div>	

	)
}

export default Shortened