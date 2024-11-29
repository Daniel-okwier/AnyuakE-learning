
import './About.css'; // Import the corresponding CSS file

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Anyuak E-Learning</h1>
      </header>
      <section className="about-section">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
  At Anyuak E-Learning, our mission is to empower learners by providing comprehensive and accessible science education in the Anyuak language. We are committed to fostering a deeper understanding of essential scientific concepts and principles, ensuring that every learner can grasp these ideas in a way that resonates with their cultural context. By bridging the gap in educational resources, we aim to cultivate curiosity and critical thinking skills within our community, enabling individuals to thrive in an increasingly scientific world.
</p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
      
          <p>
  We envision a future where every Anyuak learner has the opportunity to explore, engage with, and excel in the field of science. Our goal is to bridge cultural and educational gaps by providing tailored resources that resonate with the unique needs and experiences of the Anuak community. Through innovative teaching methods and culturally relevant materials, we aim to inspire a lifelong passion for learning, encouraging students to become critical thinkers and problem solvers in an ever-evolving world.
</p>
          
        </div>
        <div className="story">
  <h2>Our Story</h2>
  <p>
    Founded by a passionate advocate for accessible education, Anyuak E-Learning was created to address the 
    need for localized educational resources. As we grow, we aim to invite like-minded individuals and 
    community advocates to join us in our mission to make science education accessible to all. 
    We believe that language should not be a barrier to understanding science.
  </p>
</div>
        <div className="future-goals">
          <h2>Our Future Goals</h2>
          <p>We aim to expand our course offerings and enhance the features of our platform to better serve our community.</p>
          <ul>
            <li>Launch new courses in additional subjects</li>
            <li>Implement more interactive learning tools</li>
            <li>Expand our reach to more learners in the region</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;  