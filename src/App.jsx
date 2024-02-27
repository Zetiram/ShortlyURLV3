import MoreThan from './components/MoreThan.jsx'
import NavBar from './components/NavBar.jsx'
import Burger from './components/burger.jsx'
import Stats from './components/Stats.jsx'
import StatsTitle from './components/StatsTitle.jsx'
import Short from './components/shorter.jsx'
import Shortened from './components/showurl.jsx'
import Footer from './components/Footer.jsx'
import GetStart from './components/GetStarted.jsx'

import Recognition from './images/icon-brand-recognition.svg'
import Records from './images/icon-detailed-records.svg'
import Custom from './images/icon-fully-customizable.svg'

import './styles/styles.css'


function App() {
  return (
      <div>
        <NavBar/>


        <main>
        
          <MoreThan/>

          <div className="stats-container">
          <Short/>

          <StatsTitle
            title="Advanced Statistics"
            desc="Track how your links are performing across the web with our advanced statistics dashboard."
          />

          <div className="Stats-container-items">

          <Stats
            img={Recognition}
            title="Brand Recognition"
            text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />

          <hr className="hr1"/>

          <Stats
              img={Records}
            title="Detailed Records"
            text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />

          <hr className="hr2"/>

          <Stats
            img={Custom}
            title="Fully Customizable"
            text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />

          </div>

          </div>

        </main>

        <GetStart/>

        <Footer/>
      </div>
  );
}

export default App;

