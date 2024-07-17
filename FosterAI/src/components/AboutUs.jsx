import React from 'react';
import './aboutus.css'; // Assuming you have a CSS file named AboutUs.css for styling

function AboutUs(){
  return (
    <div className="about-us-container">
      <h1 classname="heading">About Us</h1>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <br></br>

        <div className="team-member">
          <img src="../../Assets/viraj.png" alt="Viraj" className="team-member-img" />
          <div className="team-member-details">
            <h3>Viraj</h3>
            <p><strong>Role:</strong> Backend Developer</p>
            <p><strong>Bio:</strong> A creative thinker with a passion for backend development, Viraj ensures that FosterBot's server-side operations run smoothly.</p>
            <p><strong>Skills:</strong> React, Node.js, Database Management</p>
          </div>
        </div>

        <div className="team-member">
          <img src="../../Assets/jay.png" alt="Jay" className="team-member-img" />
          <div className="team-member-details">
            <h3>Jay</h3>
            <p><strong>Role:</strong> Backend Developer</p>
            <p><strong>Bio:</strong> Jay specializes in backend development and is instrumental in implementing the core functionalities of FosterBot.</p>
            <p><strong>Skills:</strong> Node.js, Machine Learning</p>
          </div>
        </div>

        <div className="team-member">
          <img src="../../Assets/naman.png" alt="Naman" className="team-member-img" />
          <div className="team-member-details">
            <h3>Naman</h3>
            <p><strong>Role:</strong> Frontend Developer</p>
            <p><strong>Bio:</strong> Naman is a frontend wizard who brings FosterBot to life with his expertise in crafting intuitive user interfaces.</p>
            <p><strong>Skills:</strong> React, UI/UX Design, JavaScript, CSS</p>
          </div>
        </div>

        <div className="team-member">
          <img src="../../Assets/prajwal.png" alt="Prajwal" className="team-member-img" />
          <div className="team-member-details">
            <h3>Prajwal</h3>
            <p><strong>Role:</strong> Project Manager & Quality Assurance</p>
            <p><strong>Bio:</strong> Prajwal is the backbone of our team, ensuring that FosterBot meets the highest quality standards and is delivered on time.</p>
            <p><strong>Skills:</strong> Project Management, Quality Assurance, Communication</p>
          </div>
        </div>
      </section>
      <section className="about-fosterbot-section">
        <h2>About FosterBot</h2>
        <p>FosterBot is a cutting-edge career guidance chatbot designed to empower individuals with personalized advice and resources tailored to their unique aspirations and interests. Leveraging machine learning algorithms and a vast database of career insights, FosterBot serves as a trusted companion on your career journey.</p>
      </section>

      <section className="tech-stack-section">
        <h2>Our Technology Stack</h2>
        <ul>
          <li>Frontend: React, JavaScript, CSS</li>
          <li>Backend: Node.js, Python</li>
          <li>Machine Learning: TensorFlow, scikit-learn</li>
          <li>Database: MongoDB, PostgreSQL</li>
        </ul>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>Our mission is to empower individuals with the knowledge and guidance they need to make informed career decisions. We envision FosterBot as a trusted companion on your career journey, providing personalized advice and resources tailored to your unique aspirations and interests.</p>
      </section>

      <section className="connect-section">
        <h2>Stay Connected</h2>
        <p>Follow us on <a href="#linkedin">LinkedIn</a>, <a href="#twitter">Twitter</a>, and <a href="#instagram">Instagram</a> for updates, tips, and career insights!</p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>For any inquiries or support, please email us at <a href="mailto:contact@fosterbot.com">contact@fosterbot.com</a> or fill out our <a href="#contact-form">contact form</a>.</p>
      </section>

      <footer>
        <p>© 2024 FosterAI. All Rights Reserved.</p>
      </footer>
    </div>

  );
}

export default AboutUs;
