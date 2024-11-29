import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css'; // Import the CSS file for styling
import mission from '../assets/images/mission.jpeg'; 


function Home() {
  return (
    <div className="homepage">
      <section className="hero"> 
        <div className="hero-content">
          <h1>Ignite Curiosity: Unleash the Scientist Within!</h1>
          <Link to="/Courses" className="btn">Start Learning</Link> 
        </div>

        <div className="hero-logo">
          <img src={mission} alt="Launch into Science" className="rocket-image" />
        </div>
      </section>
    </div>
  );
}

export default Home;