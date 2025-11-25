import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-container about-me-container">
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            I started my journey in software development in Bulgaria. I was driven by a curiosity for computers and was eager to learn how everything worked. This path led me to the United Kingdom where I pursued formal education in Computer Science at the Univerity of Essex.
          </p>
          <p>
            Over the years, I've honed my skills in various programming languages and frameworks, allowing me to build robust and scalable applications. My passion lies in creating efficient solutions that not only meet user needs but also provide an intuitive experience.
          </p>
        </div>
        <div className="about-me-image">
          <img src={process.env.PUBLIC_URL + '/profile.jpeg'} alt="A placeholder portrait" />
        </div>
      </div>
    </section>
  );
}
