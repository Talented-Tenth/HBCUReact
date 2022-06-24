import logo from './BannerTTh.JPG';
import './App.css';


function Landing() {
  return (
    <div className="App">
      <div class="card">
            <div class="sides left-side">
                <h1 class="name">HBCU</h1>
                <h3 class="School">Colleges  & </h3>
            </div>
               
            <div class="sides right-side">
                <h1 class="name">TOUR</h1>
                <h3 class="School">Universities</h3>
            </div> 
            <div class="back-side">
              <p class="biography"> THE TALENTED 10TH NETWORK"</p>
            </div>
              <p>
                Sign Up to stay informed about events happening at your favorite HBCUs!
              </p>

      </div>
      <a
              className="App-link"
              href='/signup'>
            Sign Up
            </a>
    </div>
 
 
  );
}

export default Landing;